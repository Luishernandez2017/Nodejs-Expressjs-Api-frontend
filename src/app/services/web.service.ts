import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';

@Injectable()
export class WebService {
BASE_URL= 'http://localhost:3000/api';//Base URL for Api's
books =[];
genres=[];
book =[];
  constructor(private http: Http, private router:Router) {
    this.getBooks();
    this.getGenres();
  }
    async getBooks(){

        var response = await this.http.get(this.BASE_URL+'/books').toPromise();
        this.books = response.json();

  }
      async getDetails(id){
      id = (id) ? id: '';
        var response = await this.http.get(this.BASE_URL+'/books/'+id).toPromise();
       this.book= response.json();

  }

       async getGenres(){

        var response = await this.http.get(this.BASE_URL+'/genres/').toPromise();
       this.genres= response.json();

  }

        async addBook(obj:any){

       var book = this.defineBook(obj);

    try{
    var response= await this.http.post(this.BASE_URL+'/books/', book).toPromise();
 this.router.navigate(['/api/books']);
}catch(error){
     console.log(error);
    }

    console.log(book);
  }

        async editBook(id, obj){

       var book = this.defineBook(obj);

    try{
    var response= await this.http.put(this.BASE_URL+'/books/'+id, book).toPromise();
    console.log(response.json());
 this.router.navigate(['/api/books']);
}catch(error){
     console.log(error);
    }

   // console.log(this.BASE_URL+id, book);
  }


        async removeBook(id){
      id = (id) ? id: '';
        var response = await this.http.delete(this.BASE_URL+'/books/'+id).toPromise();
       console.log(response.json());
        this.router.navigate(['/api/books']);

  }

  defineBook(obj:any){
 var book = {

      "title": obj.title,
      "genre": obj.genre,
      "overview" : obj.overview,
      "author": obj.author,
      "publisher": obj.publisher,
      "pages": obj.pages,
      "image_url": obj.image_url,
      "buy_url": obj.buy_url,


    }
      //console.log(book);
    return book;

  }
}
