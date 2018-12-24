import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-match-results',
  templateUrl: './match-results.component.html',
  styleUrls: ['./match-results.component.css']
})
export class MatchResultsComponent implements OnInit {

  LastScore: any;
  LastScoreN: any;
  FilteredMatches: any;
  Age: any; Div: any;
  Ages: any; Divs: any;
  Clubs: any;
  ClubName: String;

  constructor(private http: HttpClient, public Route: Router) {
    this.LastScore = [{
      "ID": "",
      "ClubA": "",
      "ClubB": "",
      "Division": "",
      "Gender": "",
      "Date": "",
      "ScoreA": "",
      "ScoreB": "",
      "Place": "",
      "LiveLink": "",
      "Age": ""
    }];

    this.LastScoreN = [{
      "ID": "",
      "NationalA": "",
      "NationalB": "",
      "Place": "",
      "ScoreA": "",
      "ScoreB": "",
      "Date": ""
    }];

    this.FilteredMatches = [];
    this.Clubs = [{
      "ID": "",
      "NameA": "",
      "NameE": "",
      "DescriptionA": "",
      "DescriptionE": "",
      "EstablishedYear": "",
      "NumberTitles": "",
      "Division": "",
      "Logo": ""
    }];
    this.Ages = [{
      "ID": "",
      "NameA": "",
      "NameE": ""
    }];
    this.Divs = [{
      "ID": "",
      "NameA": "",
      "NameE": ""
    }];

  }

  LastScoreRes() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Matches/MatcheScore').subscribe((res: any) => {
      if (res.isSuccess) {
        this.LastScore = res.Response.MatcheScore;
        this.FilteredMatches = this.LastScore;
        console.log(this.LastScore);
      }

    });
  }
  LastNScoreRes() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/NationalMatches/MatcheScore').subscribe((res: any) => {
      if (res.isSuccess) {
        this.LastScoreN = res.Response.MatcheScore;
        this.FilteredMatches = this.LastScoreN;
        console.log(this.LastScore);
      }

    });
  }

  GetAllClubs() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Clubs/AllClubs').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Clubs = res.Response.Players;
        console.log(this.Clubs);
      }
    });

  }
  GetAges() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Settings/AllAges').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Ages = res.Response.Ages;
        console.log(this.Ages);
      }

    });
  }
  GetDivs() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Settings/AllDivisions').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Divs = res.Response.Divisions;
        console.log(this.Divs);
      }

    });
  }
  FilterMatches(x, y, z) {
    this.FilteredMatches = [];
    console.log(x);
    console.log(y);
    console.log(z);

    if ((x == undefined || x == '') && (y == undefined || y == '') && (z == '' || z == undefined)) {
      this.FilteredMatches = this.LastScore;
    }
    else if ((x != undefined && x != '') && (y == undefined || y == '') && (z == '' || z == undefined)) {
      for (var i = 0; this.LastScore != undefined && i < this.LastScore.length; i++) {
        if (this.LastScore[i].AgeID == x) {
          this.FilteredMatches.push(this.LastScore[i]);
        }
      }

    }
    else if ((x == undefined || x == '') && (y != undefined || y != '') && (z == '' || z == undefined)) {
      for (var i = 0; this.LastScore != undefined && i < this.LastScore.length; i++) {
        if (this.LastScore[i].DivisionID === y)
          this.FilteredMatches.push(this.LastScore[i]);
      }

    }
    else if ((x == undefined || x == '') && (y == undefined || y == '') && (z != '' || z != undefined)) {
      for (var i = 0; this.LastScore != undefined && i < this.LastScore.length; i++) {
        if (this.LastScore[i].ClubA === z || this.LastScore[i].ClubB === z)
          this.FilteredMatches.push(this.LastScore[i]);
      }

    }
    else if ((x != undefined || x != '') && (y != undefined || y != '') && (z == '' || z == undefined)) {
      for (var i = 0; this.LastScore != undefined && i < this.LastScore.length; i++) {
        if (this.LastScore[i].DivisionID === y && this.LastScore[i].AgeID === x)
          this.FilteredMatches.push(this.LastScore[i]);
      }
    }
    else if ((x != undefined || x != '') && (y == undefined || y == '') && (z != '' || z != undefined)) {
      for (var i = 0; this.LastScore != undefined && i < this.LastScore.length; i++) {
        if (this.LastScore[i].ClubA === z || this.LastScore[i].ClubB === z && this.LastScore[i].AgeID === x)
          this.FilteredMatches.push(this.LastScore[i]);
      }
    }
    else if ((x == undefined || x == '') && (y != undefined || y != '') && (z != '' || z != undefined)) {
      for (var i = 0; this.LastScore != undefined && i < this.LastScore.length; i++) {
        if (this.LastScore[i].ClubA === z || this.LastScore[i].ClubB === z && this.LastScore[i].DivisionID === y)
          this.FilteredMatches.push(this.LastScore[i]);
      }
    }
    else {
      for (var i = 0; this.LastScore != undefined && i < this.LastScore.length; i++) {
        if (this.LastScore[i].ClubA === z || this.LastScore[i].ClubB === z && this.LastScore[i].DivisionID === y && this.LastScore[i].AgeID === x)
          this.FilteredMatches.push(this.LastScore[i]);
      }
    }
    console.log(this.FilteredMatches);

  }
  FilterNMatches(x, y) {
    this.FilteredMatches = [];
    console.log(x);
    console.log(y);
    if ((x == undefined || x == '') && (y == undefined || y == '')) {
      this.FilteredMatches = this.LastScore;
    }
    else if ((x != undefined && x != '') && (y == undefined || y == '')) {
      for (var i = 0; this.LastScore != undefined && i < this.LastScore.length; i++) {
        if (this.LastScore[i].AgeID == x) {
          this.FilteredMatches.push(this.LastScore[i]);
        }
      }

    }
    else if ((x == undefined || x == '') && (y != undefined || y != '')) {
      for (var i = 0; this.LastScore != undefined && i < this.LastScore.length; i++) {
        if (this.LastScore[i].DivisionID === y)
          this.FilteredMatches.push(this.LastScore[i]);
      }

    }
    else {
      for (var i = 0; this.LastScore != undefined && i < this.LastScore.length; i++) {
        if (this.LastScore[i].DivisionID === y && this.LastScore[i].AgeID === x)
          this.FilteredMatches.push(this.LastScore[i]);
      }
    }
    console.log(this.FilteredMatches);

  }
  errorHandler(event) {
    console.debug(event);
    event.target.src = "assets/images/logo.jpg";
  }
  ngOnInit() {
    if (this.Route.url === '/match-result') {
      this.LastScoreRes();
      this.GetAllClubs();
      this.GetAges();
      this.GetDivs();

    }
    else {
      this.LastNScoreRes();
      this.GetAges();
      this.GetDivs();

    }

  }


}
