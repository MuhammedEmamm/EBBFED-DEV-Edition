import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  DesDetail: {
    "ID": "",
    "TitleA": "",
    "TitleE": "",
    "ShortDescriptionA": "",
    "ShortDescriptionE": "",
    "LongDescriptionA": "",
    "LongDescriptionE": "",
    "Location": ""

  };
  Table: any;
  NMatches: any;


  constructor(private http: HttpClient, private A: ActivatedRoute) {
    this.DesDetail = {
      "ID": "",
      "TitleA": "",
      "TitleE": "",
      "ShortDescriptionA": "",
      "ShortDescriptionE": "",
      "LongDescriptionA": "",
      "LongDescriptionE": "",
      "Location": ""
    }
    this.Table = [
      {
        "ID": "",
        "ClubName": "",
        "NumberOfMatches": "",
        "Winner": "",
        "Lose": "",
        "Points": "",
        "INGoals": "",
        "OutGoals": ""
      }];

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

  }
  DesID = this.A.snapshot.paramMap.get('id');
  GetDesDetails() {
    this.http.get(`http://yakensolution.cloudapp.net/EBBFED/api/Courses/Course?id=${this.DesID}`).subscribe((res: any) => {
      if (res.isSuccess) {
        this.DesDetail = res.Response.Course[0];
        console.log(this.DesDetail);
      }
    });
  }
  GetLeagueTable() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Matches/TableMatches').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Table = res.Response.TableMatches;
        console.log(this.Table);
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
    this.GetDesDetails() ; 
    this.GetLeagueTable() ; 
    this.NextMatches() ; 
  }

}
