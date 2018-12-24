import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles-details',
  templateUrl: './articles-details.component.html',
  styleUrls: ['./articles-details.component.css']
})
export class ArticlesDetailsComponent implements OnInit {

  News: {
    ID: string,
    TitleA: string,
    TitleE: string,
    ShortDescriptionA: string,
    ShortDescriptionE: string,
    ImageUrl: string,
    Date: string,
    LongDescriptionA: string,
    LongDescriptionE: string,

  };
  AllNews: any;
  Table: any;
  NMatches: any;
  LastNews: any;

  constructor(public http: HttpClient, public Route: ActivatedRoute) {
    this.News = {
      ID: "",
      TitleA: "",
      TitleE: "",
      ShortDescriptionA: "",
      ShortDescriptionE: "",
      ImageUrl: "",
      Date: "",
      LongDescriptionA: "",
      LongDescriptionE: "",

    };

    this.AllNews = [
      {
        "ID": "",
        "TitleA": "",
        "TitleE": "",
        "ShortDescriptionA": "",
        "ShortDescriptionE": "",
        "ImageUrl": "",
        "CreationDate": "",
        "ModifiedDate": "",
        "Views": "",
        "ShareLink": "",
        "Clubs": []
      }
      ,
      {
        "ID": "",
        "TitleA": "",
        "TitleE": "",
        "ShortDescriptionA": "",
        "ShortDescriptionE": "",
        "ImageUrl": "",
        "CreationDate": "",
        "ModifiedDate": "",
        "Views": "",
        "ShareLink": "",
        "Clubs": []
      }
    ]
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


    this.LastNews = [{
      "ID": "",
      "TitleA": "",
      "TitleE": "",
      "ShortDescriptionA": "",
      "ShortDescriptionE": "",
      "LongDescriptionA": "",
      "LongDescriptionE": "",
      "ImageUrl": "",
      "CreationDate": "",
      "ModifiedDate": "",
      "Views": "",
      "ShareLink": "",
      "Clubs": []
    }, {
      "ID": "",
      "TitleA": "",
      "TitleE": "",
      "ShortDescriptionA": "",
      "ShortDescriptionE": "",
      "LongDescriptionA": "",
      "LongDescriptionE": "",
      "ImageUrl": "",
      "CreationDate": "",
      "ModifiedDate": "",
      "Views": "",
      "ShareLink": "",
      "Clubs": []
    }, {
      "ID": "",
      "TitleA": "",
      "TitleE": "",
      "ShortDescriptionA": "",
      "ShortDescriptionE": "",
      "LongDescriptionA": "",
      "LongDescriptionE": "",
      "ImageUrl": "",
      "CreationDate": "",
      "ModifiedDate": "",
      "Views": "",
      "ShareLink": "",
      "Clubs": []
    }]

    this.Route.params.subscribe(routeParams => {
      this.GetNewsDetails(routeParams.id);
      this.GetAllNews();
      this.GetLeagueTable();
      this.NextMatches();
      this.LastestNews();
    });

  }


  GetNewsDetails(NewsID) {
    this.http.get(`http://yakensolution.cloudapp.net/EBBFED/api/Settings/GetArticle?id=${NewsID}`).subscribe((res: any) => {
      if (res.isSuccess) {
        this.News = res.Response.Article[0];
        console.log(this.News);
      }
    });
  }
  GetAllNews() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/News/AllNews').subscribe((res: any) => {
      if (res.isSuccess) {
        this.AllNews = res.Response.News;
        console.log(this.AllNews);
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
  LastestNews() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/News/LastNews').subscribe((res: any) => {
      if (res.isSuccess) {
        this.LastNews = res.Response.LastNews;
        console.log(this.LastNews);
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
  errorHandler(event) {
    console.debug(event);
    event.target.src = "assets/images/logo.jpg";
  }
  ngOnInit() {

  }
}
