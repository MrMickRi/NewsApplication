import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.page.html',
  styleUrls: ['./business-details.page.scss'],
})
export class BusinessDetailsPage implements OnInit {

	
  article: any;
 
   constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private api:ApiService) { }
 
  ngOnInit() {
    let articles_id = this.activatedRoute.snapshot.paramMap.get('articlesId');
    this.api.getBusinessNews().subscribe(res => {
      this.article = res;
    });
  }
}