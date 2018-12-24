import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute  , Router} from '@angular/router';
import * as jQuery from 'jquery';
import { from } from 'rxjs';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  Gallery : any ;

  constructor(private http : HttpClient) { 
   
    this.Gallery = [{

      "ID": "",
      "ImageUrl": "",
      "VideoUrl": "",
      "DescriptionA": "",
      "DescriptionE": "",
      "Date" : ""
    }] ; 
    
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
    this.GetGallery() ; 

  }

}
