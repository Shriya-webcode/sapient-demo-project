import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceXServiceService {


  constructor(private http: HttpClient) { }

  private landPageDataUrl: string = 'https://api.spacexdata.com/v3/launches?limit=100';

  GetLandPageData(): Observable<any[]> {

    let headers = new HttpHeaders({ 'Accept': 'application/json' });

    let options = {
      headers: headers
    }
    return this.http.get<any[]>(this.landPageDataUrl, options);
  }
  
  GetAllData(launch :any,land:any,year:string): Observable<any> {

    let headers = new HttpHeaders({ 'Accept': 'application/json' });

    let options = {
      headers: headers
    }
    return this.http.get(this.landPageDataUrl + "&amp;launch_success=" + launch + "&amp;land_success=" + land +"&amp;launch_year=" + year , options);
  }
  
  GetDataByLaunchSuccess(launch: any): Observable<any> {

    let headers = new HttpHeaders({ 'Accept': 'application/json' });

    let options = {
      headers: headers
    }
    return this.http.get(this.landPageDataUrl + "&amp;launch_success=" + launch , options);
  }
  
  GeDataByLaunchAndLand(launch: any, land: any): Observable<any> {

    let headers = new HttpHeaders({ 'Accept': 'application/json' });

    let options = {
      headers: headers
    }
    return this.http.get(this.landPageDataUrl + "&amp;launch_success=" + launch + "&amp;land_success=" + land , options);
  }

}
