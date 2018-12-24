import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-rulers',
  templateUrl: './rulers.component.html',
  styleUrls: ['./rulers.component.css']
})
export class RulersComponent implements OnInit {
  Rulers: any;
  FilteredRulers: Array<any>;
  Rulername: any ; 
  constructor(private http: HttpClient) {
    this.Rulers = [{
      "ID": "",
      "NameA": "",
      "NameE": "",
      "DescriptionA": "",
      "DescriptionE": "",
      "ImageUrl": "",
      "Category": ""
    }] ; 
    this.FilteredRulers = [] ; 
  }
  GetAllRulers() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Judges/AllJudges').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Rulers = res.Response.Judges;
        this.FilteredRulers = this.Rulers;
        console.log(this.Rulers);
      }
    });
  }
  errorHandler(event) {
    console.debug(event);
    event.target.src = "assets/extra-images/player-grid-img1.jpg";
  }
  ngOnInit() {
    this.GetAllRulers() ; 
  }

}
