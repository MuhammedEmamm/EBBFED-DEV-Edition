import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  Courses: any;
  constructor(private http: HttpClient) {
    this.Courses = [{
      "ID": "",
      "TitleA": "",
      "TitleE": "",
      "ShortDescriptionA": "",
      "ShortDescriptionE": "",
      "LongDescriptionA": "",
      "LongDescriptionE": "",
      "Location": ""
    }];
  }
  GetAllCourses(){
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Courses/AllCourses').subscribe((res:any)=>{
      if(res.isSuccess){
        this.Courses = res.Response.Courses ; 
        console.log(this.Courses) ; 
      }
    }) ;
  }
  errorHandler(event) {
    console.debug(event);
    event.target.src = "assets/images/logo.jpg";
  }
  ngOnInit() {
    this.GetAllCourses() ; 
  }

}
