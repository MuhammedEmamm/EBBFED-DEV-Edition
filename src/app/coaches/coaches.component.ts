import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute  , Router} from '@angular/router';
@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements OnInit {
  Coaches : any ; 
  FilteredCoaches : any ; 
  CoachName : any; 
  Clubs : any ; 
  ClubName : String ; 
  constructor(private http : HttpClient) { 
    this.Coaches = [{
      "ID": "",
      "NameA": "",
      "NameE": "",
      "TitleA": "",
      "TitleE": "",
      "DescriptionA": "",
      "DescriptionE": "",
      "ImageUrl": "",
      "Category": "",
      "ClubName": ""
    }] ;
    this.FilteredCoaches = [{
      "ID": "",
      "NameA": "",
      "NameE": "",
      "TitleA": "",
      "TitleE": "",
      "DescriptionA": "",
      "DescriptionE": "",
      "ImageUrl": "",
      "Category": "",
      "ClubName": ""
    }] ;
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

  }
  GetAllCoaches(){
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Coahes/AllCoahes').subscribe((res:any)=>{
      if(res.isSuccess){
        this.Coaches = res.Response.Coahes ; 
        this.FilteredCoaches  = this.Coaches ; 
        console.log(this.Coaches) ; 
      }
    }) ;
  }
  GetAllClubs(){
    this.http.get('http://yakensolution.cloudapp.net/EBBFED/api/Clubs/AllClubs').subscribe((res: any) => {
    if (res.isSuccess) {
          this.Clubs = res.Response.Players ; 
          console.log(this.Clubs) ; 
      }
    });
    
  }
  FilterCoaches(x :any){
    console.log(x) ;
    this.FilteredCoaches = [] ; 
    if(x===''){
      this.FilteredCoaches = this.Coaches; 
    } 
    for(var i =0 ; this.Coaches !== undefined &&  i<this.Coaches.length ; i++){
        if(this.Coaches[i].ClubName ==x){
          this.FilteredCoaches.push(this.Coaches[i]) ;  
          break ; 
        }
    }
    console.log(this.FilteredCoaches) ; 
  }
  errorHandler(event) {
    console.debug(event);
    event.target.src = "assets/images/logo.jpg";
  }
  ngOnInit() {
    this.GetAllCoaches() ; 
    this.GetAllClubs() ; 
  }

}
