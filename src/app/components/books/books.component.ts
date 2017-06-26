import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {WebService} from '../../services/web.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
books;


  constructor(private webService: WebService) {

   }

  ngOnInit() {


  this.webService.getBooks().then(data =>{
    this.books = data;
    console.log(this.webService.books);
    this.books= this.webService.books;

  });





}
}
