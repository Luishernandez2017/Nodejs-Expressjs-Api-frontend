import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {WebService} from '../../services/web.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
book;
 id;

  constructor(private webService: WebService, private activeRoute: ActivatedRoute, private router:Router) {


   }

  ngOnInit() {
  //     var id = this.activeRoute.snapshot.params.id;
  //  console.log(this.activeRoute.snapshot.params.id);
   this.activeRoute.params.subscribe(params =>{
      if(params['id']){
      this.id = params['id'];
        console.log(params['id']);

             this.webService.getDetails(this.id).then(data =>{
                this.book= this.webService.book;

  });
      }else{
        // this.router.navigate(['api/books']);
      }
    })


    //this.book =this.webService.getDetails(this.id);
  }


}
