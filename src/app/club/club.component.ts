import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  Clubs : any; 
  ClubName : any ; 
  FilteredClubs : Array<any> ; 
  Div: any; Divs:any; 
  constructor(private http : HttpClient) { 
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
    this.Divs = [{
      "ID": "",
      "NameA": "",
      "NameE": ""
    }];
    
    this.FilteredClubs = [] ; 

  }
  GetAllClubs() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Clubs/AllClubs').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Clubs = res.Response.Players;
        this.FilteredClubs = this.Clubs ; 
        console.log(this.Clubs);
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
  FilterClubs(x) {
    console.log(x);
    this.FilteredClubs = [];
    if (x === '') {
      this.FilteredClubs = this.Clubs;
    }
    for (var i = 0; this.Clubs !== undefined && i < this.Clubs.length; i++) {
        if (this.Clubs[i].Division  === x) {
          this.FilteredClubs.push(this.Clubs[i]);
        }

    }
    console.log(this.FilteredClubs);
  }
  errorHandler(event) {
    console.debug(event);
    event.target.src = "assets/images/logo.jpg";
  }
  ngOnInit() {
    this.GetAllClubs() ;
    this.GetDivs() ; 
  }

}
