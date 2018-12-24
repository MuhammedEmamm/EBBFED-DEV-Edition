import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  NMatches :any ; 
  Allplayers : any ;
  Clubs : any ; 
  ClubName : String ; 
  PlayerName : any ; 
  FilteredPlayers : any ; 
  constructor(public http: HttpClient, public Route: ActivatedRoute) { 
    this.NMatches= [{
      "ClubA": "",
      "ClubB": "",
      "Date": "",
      "LiveLink": "",
      "Age": "",
      "Place": "",
      "Gender": "",
      "Division": ""
    }]
    this.FilteredPlayers = [] ;
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
    }] ; 

    this.Allplayers = [{
      "ID": "",
      "NameA": "",
      "NameE": "",
      "Age": "",
      "Center": "",
      "Height": "",
      "Weight": "",
      "InternationalMatches": "",
      "PlayerType": "",
      "ClubName": "",
      "ImageUrl": "",
      "TransfarFrom": "",
      "TransfarTo": "",
      "Year": ""
    }] ; 
  }
  NextMatches() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Matches/NextMatche').subscribe((res: any) => {
      if (res.isSuccess) {
        this.NMatches = res.Response.NextMatche;
        console.log(this.NMatches);
      }

    });
  }

  GetAllPlayers() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Players/AllPlayers').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Allplayers = res.Response.Players;
        this.FilteredPlayers = this.Allplayers ; 
        console.log(this.Allplayers);
      }

    });
  }
  FilterPlayers(x){
    console.log(x) ;
    this.FilteredPlayers = [] ; 
    if(x===''){
      this.FilteredPlayers = this.Allplayers; 
    } 
    for(var i =0 ; this.Allplayers !== undefined &&  i<this.Allplayers.length ; i++){

        if(this.Allplayers[i].ClubName===x.NameE || this.Allplayers[i].ClubName===x.NameA ){
          this.FilteredPlayers.push(this.Allplayers[i]) ;  
        }
    }
    console.log(this.FilteredPlayers) ; 
  }
  GetAllClubs(){
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Clubs/AllClubs').subscribe((res: any) => {
    if (res.isSuccess) {
          this.Clubs = res.Response.Players ; 
          console.log(this.Clubs) ; 
      }
    });
    
  }
  
  
  errorHandler(event) {
    console.debug(event);
    event.target.src = "assets/images/logo.jpg";
  }
  
  ngOnInit() {
    this.NextMatches() ;
    this.GetAllPlayers() ; 
    this.GetAllClubs()  ; 
  }

}
