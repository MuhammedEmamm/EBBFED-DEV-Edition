import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.css']
})
export class ClubDetailsComponent implements OnInit {
  Club :   {
    "ID": "",
    "NameA": "",
    "NameE": "",
    "DescriptionA": "",
    "DescriptionE": "",
    "EstablishedYear": "",
    "TitlesWon": "",
    "Division": "",
    "Logo": ""
    
  } ;
  NMatches :any ; 

  constructor(public http: HttpClient, public Route: ActivatedRoute){
    this.Club = {
      "ID": "",
      "NameA": "",
      "NameE": "",
      "DescriptionA": "",
      "DescriptionE": "",
      "EstablishedYear": "",
      "TitlesWon": "",
      "Division": "",
      "Logo": ""
    }
    this.NMatches= [{
      "ClubA": "",
      "ClubB": "",
      "Date": "",
      "LiveLink": "",
      "Age": "",
      "Place": "",
      "Gender": "",
      "Division": ""
    }] ; 
   
  }
  public ClubID = this.Route.snapshot.paramMap.get('id');

  GetClubDetails() {
    this.http.get(`http://yakensolution.cloudapp.net/EBBFED/api/Clubs/GetClub?id=${this.ClubID}`).subscribe((res: any) => {
      if (res.isSuccess) {
        this.Club = res.Response.Players[0];
        console.log(this.Club);
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
    this.GetClubDetails() ;
    this.NextMatches() ; 
  }

}
