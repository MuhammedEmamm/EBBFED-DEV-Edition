import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coaches-details',
  templateUrl: './coaches-details.component.html',
  styleUrls: ['./coaches-details.component.css']
})
export class CoachesDetailsComponent implements OnInit {
  Coache: {
    "ID": "",
    "NameA": "",
    "NameE": "",
    "TitleA": "",
    "TitleE": "",
    "DescriptionA": "",
    "DescriptionE": "",
    "ImageUrl": "",
    "Category": "",
    "ClubName": ""
  };
  NMatches: any;

  constructor(public http: HttpClient, public Route: ActivatedRoute) { 
    this.NMatches = [{
      "ClubA": "",
      "ClubB": "",
      "Date": "",
      "LiveLink": "",
      "Age": "",
      "Place": "",
      "Gender": "",
      "Division": ""
    }];
   
   
    this.Coache = {
      "ID": "",
      "NameA": "",
      "NameE": "",
      "TitleA": "",
      "TitleE": "",
      "DescriptionA": "",
      "DescriptionE": "",
      "ImageUrl": "",
      "Category": "",
      "ClubName": ""
    }
    this.Route.params.subscribe(routeParams => {
      // this.GetAllPlayers();
      // this.NextMatches();
       this.GetCoachDetails(routeParams.id);
       this.NextMatches() ; 
    });
  }
  GetCoachDetails(CoacheID : any) {
    this.http.get(`http://yakensolution.cloudapp.net/EBBFED/api/Coahes/GetCoahes?id=${CoacheID}`).subscribe((res: any) => {
      if (res.isSuccess) {
        this.Coache = res.Response.Coahe[0];
        console.log(this.Coache);
      }
    });
  }
  NextMatches() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Matches/NextMatche').subscribe((res: any) => {
      if (res.isSuccess) {
        this.NMatches = res.Response.NextMatche;
        console.log(this.NMatches);
      }

    });
  }
  errorHandler(event) {
    console.debug(event);
    event.target.src = "assets/images/logo.jpg";
  }
  ngOnInit() {
  }

}
