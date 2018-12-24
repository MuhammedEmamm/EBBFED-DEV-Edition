import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-union-decs',
  templateUrl: './union-decs.component.html',
  styleUrls: ['./union-decs.component.css']
})
export class UnionDecsComponent implements OnInit {
  Decs: any;
  constructor(private http: HttpClient) {
    this.Decs = [{
      "ID": "",
      "ShortDescriptionA": "",
      "ShortDescriptionE": "",
      "CreationDate": "",
      "TitleA": "",
      "TitleE": ""
    }] ; 
  }

  GetDesc() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Union/Decisions').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Decs = res.Response.Decision; 
        console.log(this.Decs);
      }

    });
  }
  errorHandler(event) {
    console.debug(event);
    event.target.src = "assets/images/logo.jpg";
  }
  ngOnInit() {
    this.GetDesc() ; 
  }

}
