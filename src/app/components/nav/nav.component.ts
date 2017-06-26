import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

currentLink;

  constructor(private activateRoute: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {



  this.router.events.subscribe((data:any) => {
  // console.log(data.url);
  if(data.url){
    this.currentLink = data.url;
  }


 });

  }
   removeCurrentLink(link){
     if("/"+link == this.currentLink){
       return true;
     }else{
       return false;
     }

  }

}
