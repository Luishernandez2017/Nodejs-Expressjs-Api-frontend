import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {WebService} from '../../services/web.service';
import { FormsModule} from '@angular/forms'
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

genres;

 books=[];

  title:string ='';
  author:string='';
  genre:string ='';
  publisher:string='';
  pages:string='';
  image_url:string='';
  buy_url: string='';
  overview:string = '';



  constructor(private webService: WebService) { }

  ngOnInit() {
    this.webService.getGenres().then(data =>{
    //this.genres = data;
    console.log(this.webService.genres);


    this.genres= this.webService.genres;

  });



}

addContent(value:any){
  var obj = value;
  this.webService.addBook(obj);
 //console.log("overvie: " + obj.overview);

}

// addBook(value:any){
// this.books.push(

//   {
//   'title': value.title,
//   'author': value.author,
//   'genre': value.genre,
//   'publisher': value.publisher,
//   'pages': value.pages,
//   'image_url':value.image_url,
//   'buy_url':value.buy_url,
//   'overview': value.overview
// }

// );
// console.log(this.book);
//   console.log(this.books[0].title);




// }

}
