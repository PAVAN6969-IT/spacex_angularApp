import { Component } from '@angular/core';
import { launchDataService } from './launchData';
import { IlaunchDetails } from './launchDetails';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'spaceX Launch Program';
  developerName: string= "Naga Pavan Kumar"
  launchData: any =[]; 
  launchyears: any [] = [];
  seleectedYr: number;
  selectedYrData: any;
  isHidden:boolean = false;
  constructor(private _launchData: launchDataService, private route: Router) {}

  ngOnInit(){
    this.route.navigate(['/landing']);
    this._launchData.getYearsData().subscribe(response =>  {
      this.launchData =response;
      this.launchData.forEach(item => {
        this.launchyears.push(item.launch_year);
        this.launchyears = [...new Set(this.launchyears)];
    });
    });
  }

  seleectedYear(year){
    this.seleectedYr = year;
    this._launchData.getdetailsBySelectedYears(year).subscribe(response =>{
      this.launchData = response;
    })
    this.route.navigate(['/landing', this.seleectedYr]);
  }

  filterLaunchSuccessData(flag){
    this._launchData.getdetailsBySuccesfullLaunch(flag).subscribe(response =>{
      this.launchData = response;
    })
    this.route.navigate(['/landing/successfullLaunch', flag]);
  }
  filterLandSuccessData(flag){
    this._launchData.getdetailsByLandSuccessfull(flag).subscribe(response =>{
      this.launchData = response;
    })
    this.route.navigate(['/landing/successfullLand', flag]);
  }
}

