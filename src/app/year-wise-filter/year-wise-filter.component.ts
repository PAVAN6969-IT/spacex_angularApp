import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-year-wise-filter',
  templateUrl: './year-wise-filter.component.html',
  styleUrls: ['./year-wise-filter.component.css']
})
export class YearWiseFilterComponent implements OnInit {

  launchData: any = [];

  constructor(private activatedroute: ActivatedRoute) {
    this.activatedroute.queryParams.subscribe((params) => {
      this.launchData = params;
      console.log(this.launchData); 
    })
  }

  ngOnInit(): void {  
  }
}
