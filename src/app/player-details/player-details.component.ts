import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  Allplayers: any;
  Player: {
    "ID": "",
    "NameA": "",
    "NameE": "",
    "Age": "",
    "Position": "",
    "Height": "",
    "Weight": "",
    "InternationalMatches": "",
    "PlayerType": "",
    "ClubID": "",
    "ClubName": "",
    "ImageUrl": "",
    "PlayerNumber": "",
    "Transfar": Array<Object>
  };
  NMatches: any;
  RelatedPlayers: any;
  constructor(public http: HttpClient, public Route: ActivatedRoute) {
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
   
    this.RelatedPlayers = [{
      "ID": "",
      "NameA": "",
      "NameE": "",
      "Age": "",
      "ClubName": "",
      "ImageUrl": "aly khalifa.jpeg",
      "PlayerNumber": ""
    }];
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
      "Club": "",
      "ImageUrl": "",
      "TransfarFrom": "",
      "TransfarTo": "",
      "Year": ""

    }];
    this.Player = {
      "ID": "",
      "NameA": "",
      "NameE": "",
      "Age": "",
      "Position": "",
      "Height": "",
      "Weight": "",
      "InternationalMatches": "",
      "PlayerType": "",
      "ClubID": "",
      "ClubName": "",
      "ImageUrl": "",
      "PlayerNumber": "",
      "Transfar": [{
        "TransfarFrom": "",
        "Year": ""
      }]
    };
    this.Route.params.subscribe(routeParams => {
      this.GetAllPlayers();
      this.NextMatches();
      this.GetPlayerDetails(routeParams.id);
    });

  }
  public PlayerID = this.Route.snapshot.paramMap.get('id');

  GetAllPlayers() {
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Players/AllPlayers').subscribe((res: any) => {
      if (res.isSuccess) {
        this.Allplayers = res.Response.Players;
        console.log(this.Allplayers);
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
  GetPlayerDetails(PlayerID) {
    this.http.get(`http://yakensolution.cloudapp.net/EBBFED/api/Players/GetPlayer?id=${PlayerID}`).subscribe((res: any) => {
      if (res.isSuccess) {
        this.Player = res.Response.Players[0];
        this.RelatedPlayers = res.Response.RelatedPlayers;
        console.log(this.Player);
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
