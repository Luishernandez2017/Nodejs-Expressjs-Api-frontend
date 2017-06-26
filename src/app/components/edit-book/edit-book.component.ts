import { Component, OnInit, Input} from '@angular/core';
import {Http} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import {WebService} from '../../services/web.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id;
book;
title;
author;
genre;
publisher;
pages;
image_url;
buy_url;
overview;

  constructor(private webService:WebService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit() {
       this.activatedRoute.params.subscribe(params =>{
      if(params['id']){
      this.id = params['id'];
        //console.log(params['id']);

             this.webService.getDetails(this.id).then(data =>{
                this.book= this.webService.book;

                this.title =this.book.title;
                this.author = this.book.author;
                this.genre = this.book.genre;
                this.publisher = this.book.publisher;
                this.pages = this.book.pages;
                this.image_url = this.book.image_url;
                this.buy_url = this.book.buy_url;
                this.overview = this.book.overview;



//console.log(this.book);
  });
      }
    });


  }
  submit(value:any){
  var obj = value;

  this.webService.editBook(this.id,obj);

}

delete(){
  this.webService.removeBook(this.id);
}



}
