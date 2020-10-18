import { Component, OnInit } from '@angular/core';
import { SpaceXServiceService } from './spacex-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  details: any[];
  yearList: any[];
    selectedLand: boolean=true  ;
    selectedLaunch: boolean=true;
    filterData: any[];

  constructor(private spaceXServiceService: SpaceXServiceService) {

  }

  ngOnInit() {
    this.getLandPageData();
    this.yearList = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
  }

  getLandPageData() {
    this.spaceXServiceService.GetLandPageData().subscribe(x => {
      this.details = x;
      this.filterData = x;
    });
  }

  getFilterData(type: string, value: any) {
    if(type=="year")
      this.filterData = this.details.filter(x => x.launch_year == value);
    else if (type == "launch")
      this.filterData = this.details.filter(x => x.launch_success == value);
    else if (type == "land")
      this.filterData = this.details.filter(x => x.rocket.first_stage.cores[0].land_success == value);
  }

  //getFilterData(type: string, value: any) {
  //  if (type == "year") {
  //    this.spaceXServiceService.GetAllData(this.selectedLaunch,this.selectedLand, value).subscribe(x => {
  //      this.details = x;
  //    }); }
  //  else if (type == "land") {
  //    this.selectedLand = value;
  //    this.spaceXServiceService.GeDataByLaunchAndLand(this.selectedLaunch, value).subscribe(x => {
  //      this.details = x;
  //    });}
  //  else if (type == "launch") {
  //    this.selectedLaunch = value;
  //    this.spaceXServiceService.GetDataByLaunchSuccess(value).subscribe(x => {
  //      this.details = x;
  //    });}
  //}

}
