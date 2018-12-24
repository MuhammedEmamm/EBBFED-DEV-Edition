import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute  , Router} from '@angular/router';
import * as jQuery from 'jquery';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  LastNews : any ; 
  LastScore : any ; 
  News: any;
  Table: any;
  FPlayers : any ; 
  Gallery : any ;

  constructor(private http : HttpClient) { 
    this.LastNews = 
    [{
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
    } ,
     {
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
    } 
    ,
    
    {
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
    } ]
    this.LastScore = {
      "ID": "",
      "ClubA": "",
      "ClubB": "",
      "Division": "",
      "Gender": "",
      "Date": "",
      "ScoreA": "",
      "ScoreB": "",
      "Place": "",
      "LiveLink": "",
      "Age": ""
    }
    this.Gallery = [{

      "ID": "",
      "ImageUrl": "",
      "VideoUrl": "",
      "DescriptionA": "",
      "DescriptionE": "",
      "Date" : ""
    }] ; 
    
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
  
    this.News = [
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
    
  this.FPlayers = [
    {
      "ID": "",
      "NameA": "",
      "NameE": "",
      "ImageUrl": "",
      "Age": ""
    },
    {
      "ID": "",
      "NameA": "",
      "NameE": "",
      "ImageUrl": "",
      "Age": ""
    },{
      "ID": "",
      "NameA": "",
      "NameE": "",
      "ImageUrl": "",
      "Age": ""
    },{
      "ID": "",
      "NameA": "",
      "NameE": "",
      "ImageUrl": "",
      "Age": ""
    }
  ]
  }
  InitSlider() {
    jQuery(document).ready(function($) {

      'use strict';
        //***************************
        // Sticky Header Function
        //***************************
        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > 170){  
                jQuery('body').addClass("sportsmagazine-sticky");
            }
            else{
                jQuery('body').removeClass("sportsmagazine-sticky");
            }
        });
    
        //***************************
        // BannerOne Functions
        //***************************
          jQuery('.sportsmagazine-banner-one').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              infinite: true,
              dots: false,
              arrows: false,
              fade: true,
              responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                      }
                    },
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
          });
        //***************************
        // fixtureSlider Functions
        //***************************
          jQuery('.sportsmagazine-fixture-slider').slick({
              slidesToShow: 6,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              infinite: true,
              dots: false,
              prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-left'></i></span>",
              nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
              responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                      }
                    },
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
            });
        //***************************
        // FeaturedSlider Functions
        //***************************
          jQuery('.sportsmagazine-featured-slider').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              infinite: true,
              dots: false,
              prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-left'></i></span>",
              nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
              responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                      }
                    },
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
            });
    
        //***************************
        // ThumbSlider Functions
        //***************************
        jQuery('.sportsmagazine-player-slider-image').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              fade: true,
              autoplay: true,
              autoplaySpeed: 2000,
              asNavFor: '.sportsmagazine-player-slider-nav'
        });
        
        jQuery('.sportsmagazine-player-slider-nav').slick({
              slidesToShow: 4,
              slidesToScroll: 1,
              asNavFor: '.sportsmagazine-player-slider-image',
              dots: false,
              vertical: true,
              arrows: false,
              centerMode: false,
              autoplay: true,
              autoplaySpeed: 2000,
              focusOnSelect: true,
              responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        vertical: true,
                      }
                    },
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        vertical: true,
                      }
                    },
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        vertical: true,
                      }
                    }
                  ],
        });
        //***************************
        // BannerOne Functions
        //***************************
          jQuery('.sportsmagazine-ticker-slide').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 1000,
              infinite: true,
              dots: false,
              arrows: false,
              responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                      }
                    },
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
            });
        //***************************
        // ThumbSlider Functions
        //***************************
        jQuery('.widget-images-thumb').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              fade: true,
              asNavFor: '.widget-images-list'
            });
            jQuery('.widget-images-list').slick({
              slidesToShow: 4,
              slidesToScroll: 1,
              asNavFor: '.widget-images-thumb',
              dots: false,
              vertical: false,
              prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-left'></i></span>",
              nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
              centerMode: false,
              focusOnSelect: true,
              responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        vertical: false,
                      }
                    },
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        vertical: false,
                      }
                    },
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        vertical: false,
                      }
                    }
                  ],
            });
        //***************************
        // counter Functions
        //***************************
          jQuery('.counter-slider').slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              infinite: true,
              dots: false,
              prevArrow: "<span class='slick-arrow-left'><i class='icon-arrows-2'></i></span>",
              nextArrow: "<span class='slick-arrow-right'><i class='icon-arrows-2'></i></span>",
              responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                      }
                    },
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
            });
        //***************************
        // BannerTwo Functions
        //***************************
          jQuery('.sportsmagazine-banner-two').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              infinite: true,
              dots: true,
              arrows: false,
              fade: true,
              responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                      }
                    },
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
            });
        //***************************
        // PartnerSlider Functions
        //***************************
          jQuery('.sportsmagazine-partner-slider').slick({
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              infinite: true,
              dots: false,
              prevArrow: "<span class='slick-arrow-left'><i class='icon-arrows-2'></i></span>",
              nextArrow: "<span class='slick-arrow-right'><i class='icon-arrows-2'></i></span>",
              responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                      }
                    },
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
            });
        //***************************
        // Widget Awards Functions
        //***************************
          jQuery('.widget_awards').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              infinite: true,
              dots: false,
              prevArrow: "<span class='slick-arrow-left'><i class='icon-arrows-2'></i></span>",
              nextArrow: "<span class='slick-arrow-right'><i class='icon-arrows-2'></i></span>",
              responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                      }
                    },
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
            });
    
      }
    )
    

  }
  LastestNews() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/News/LastNews').subscribe((res: any) => {
      if (res.isSuccess) {
        this.LastNews = res.Response.LastNews;
        console.log(this.LastNews);
      }


    });
  }
  LastScoreRes(){
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Matches/MatcheScore').subscribe((res:any)=>{
      if (res.isSuccess) {
        if(res.Response.MatcheScore[0] != undefined)
        this.LastScore = res.Response.MatcheScore[0];
        console.log(this.LastScore);
      }
      
    }); 
  }
  GetAllNews() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/News/AllNews').subscribe((res: any) => {
    if (res.isSuccess) {
          for(var  i = 0 ; this.News != undefined && res.Response.News != undefined && i< res.Response.News.length && i< 5  ; i++){
            this.News[i] = res.Response.News[i] ; 
          }
          console.log(this.News) ; 
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
  GetFamousPlayers() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Players/FamousPlayers').subscribe((res: any) => {
      if (res.isSuccess) {
        for(var  i = 0 ; this.FPlayers != undefined && res.Response.FamousPlayers != undefined && i< res.Response.FamousPlayers.length && i< 5  ; i++){
          this.FPlayers[i] = res.Response.FamousPlayers[i] ; 
        }
        console.log(this.FPlayers);
      }
      
    });

  }
  GetGallery(){

    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Clubs/AllGallery').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Gallery = res.Response.Gallery ; 
        console.log(this.Gallery ) ; 
      }
      
    });
    

  }
  errorHandler(event) {
    console.debug(event);
    event.target.src = "assets/images/logo.jpg";
  }
  
  
  ngOnInit() {
    this.InitSlider() ; 
    this.LastestNews() ; 
    this.LastScoreRes();
    this.GetAllNews() ; 
    this.GetLeagueTable() ; 
    this.GetFamousPlayers() ; 
    this.GetGallery() ; 
  }

}
