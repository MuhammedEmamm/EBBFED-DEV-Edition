import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  News: any;
  FilteredNews: Array<any>;
  Clubs: any;
  ClubName: String;
  NewsName: String;

  constructor(public http: HttpClient, public el: ElementRef , public Route : Router) {
    this.News = [{
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
    }];
    this.FilteredNews = [];
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



  }
  GetAllNews() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/News/AllNews').subscribe((res: any) => {
      if (res.isSuccess) {
        this.News = res.Response.News;
        this.FilteredNews = this.News;
        console.log(this.News);
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
  FilterNews(x) {
    console.log(x);
    this.FilteredNews = [];
    if (x === '') {
      this.FilteredNews = this.News;
    }
    for (var i = 0; this.News !== undefined && i < this.News.length; i++) {
      for (var j = 0; this.News[i].Clubs !== undefined && j < this.News[i].Clubs.length; j++) {
        if (this.News[i].Clubs[j] === x.NameA || this.News[i].Clubs[j] === x.NameE ) {
          this.FilteredNews.push(this.News[i]);
          break;
        }

      }
    }
    console.log(this.FilteredNews);
  }
  errorHandler(event) {
    console.debug(event);
    event.target.src = "assets/images/logo.jpg";
  }

  GetAllNNews() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/NationalMatches/NationalNews').subscribe((res: any) => {
      if (res.isSuccess) {
        this.News = res.Response.NationalNews[0].News;
        this.FilteredNews = this.News;
        console.log(this.News);
      }
    });

  }


  ngOnInit() {
    if(this.Route.url == '/news'){
      this.GetAllNews();
      this.GetAllClubs();
    
    }
    else{
      this.GetAllNNews() ; 
    }
    
  }

}
