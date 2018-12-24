import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

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
      "Date": "",
    }];
    this.FilteredNews = [];
  }
  GetAllNews() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Settings/AllArticles').subscribe((res: any) => {
      if (res.isSuccess) {
        this.News = res.Response.Articles;
        this.FilteredNews = this.News;
        console.log(this.News);
      }
    });

  }

  errorHandler(event) {
    console.debug(event);
    event.target.src = "assets/images/logo.jpg";
  }

  ngOnInit() {
      this.GetAllNews();    
  }

}
