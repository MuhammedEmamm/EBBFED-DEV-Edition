import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rr',
  templateUrl: './rr.component.html',
  styleUrls: ['./rr.component.css']
})
export class RRComponent implements OnInit {
  NMatches: any;
  Rules : any ; 
  RuleName : any ; 
  constructor(private http : HttpClient ) {
    this.NMatches = [{
      "ClubA": "",
      "ClubB": "",
      "Date": "",
      "LiveLink": "",
      "Age": "",
      "Place": "",
      "Gender": "",
      "Division": ""
    }] ; 
    this.Rules = [{

      "NameA": "",
      "NameE": "",
      "PdfName": ""
    }]
   }

  NextMatches() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Matches/NextMatche').subscribe((res: any) => {
      if (res.isSuccess) {
        this.NMatches = res.Response.NextMatche;
        console.log(this.NMatches);
      }

    });

  }
  GetRules(){
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Rules/AllRules').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Rules = res.Response.Rules;
        console.log(this.Rules);
      }

    });
    
  }
  errorHandler(event) {
    console.debug(event);
    event.target.src = "assets/images/logo.jpg";
  }
  ngOnInit() {
    this.NextMatches();
    this.GetRules() ; 
  }

}
