import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-union-presidents',
  templateUrl: './union-presidents.component.html',
  styleUrls: ['./union-presidents.component.css']
})
export class UnionPresidentsComponent implements OnInit {
  Pres :any ; 
  constructor(private http : HttpClient ) { 
    this.Pres = [{
      "ID": "",
      "ImageUrl": "",
      "NameA": "",
      "NameE": "",
      "BriefA": "",
      "BriefE": "",
      "TitleA": "",
      "TitleE": ""
    }] ; 
  }
  GetUPres(){
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Union/CouncilPresident').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Pres = res.Response.CouncilPresident; 
        console.log(this.Pres);

      }

    });
  }
  errorHandler(event) {
    console.debug(event);
    event.target.src = "assets/images/logo.jpg";
  }
  ngOnInit() {
    this.GetUPres() ; 
  }

}
