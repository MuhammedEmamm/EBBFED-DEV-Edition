import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-union-history',
  templateUrl: './union-history.component.html',
  styleUrls: ['./union-history.component.css']
})
export class UnionHistoryComponent implements OnInit {
  UHistory : any ; 
  UPersons : any ; 
  constructor(private http : HttpClient ) { 
    this.UHistory = {
      "ID": "",
      "EstablishedYear": "",
      "Achievement": ""
    }; 
    this.UPersons= [{
      "ID": "",
      "ImageUrl": "",
      "NameA": "",
      "NameE": "",
      "BriefA": "",
      "BriefE": ""
    }] ; 
  }
  GetUHistory(){
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Union/HistoryUnion').subscribe((res: any) => {
      if (res.isSuccess) {
        this.UHistory = res.Response.HistoryUnion[0];
        this.UPersons = res.Response.PersonUnion ; 
        console.log(this.UHistory);
        console.log(this.UPersons);
        
      }

    });
  }
  errorHandler(event) {
    console.debug(event);
    event.target.src = "assets/images/logo.jpg";
  }
  ngOnInit() {
    this.GetUHistory() ; 
  }

}
