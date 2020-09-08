import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class launchDataService {
  private url: string = "https://api.spaceXdata.com/v3/launches?limit=100";
  private filterUrl: string = "https://api.spaceXdata.com/v3/launches";
  private launchUrl: string = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=";
  private Launch_landUrl: string ="https://api.spaceXdata.com/v3/launches?limit=100&"

  constructor( private http: HttpClient) {}

  getYearsData() : Observable<any> {
      return this.http.get<any>(this.url);
  }

  getdetailsBySelectedYears(selectedYear): Observable<any> {
      let param = new HttpParams().set("launch_year", selectedYear);
      return this.http.get<any>(this.filterUrl,{params:param});
  }
  getdetailsBySuccesfullLaunch(launchFlag): Observable<any> {
    //let param = new HttpParams().set("launch_success", launchFlag);
    return this.http.get<any>(this.launchUrl + launchFlag);
  }

  getdetailsByLandSuccessfull(landFlag): Observable<any> {
    let param = new HttpParams().set("launch_year", landFlag);
    return this.http.get<any>(this.Launch_landUrl +"launch_success" + landFlag + "&land_success" + landFlag);
  }
}
