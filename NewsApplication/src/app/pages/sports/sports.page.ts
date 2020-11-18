import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {
    articles: Observable<any>;
    data: null

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.articles = this.api.getSportsNews();
        this.articles.subscribe(data => {
            this.data = data.response.results
            console.log(data);
        });
    }

    openDetails(article) {
        let articleID = article.articles_id;
        this.router.navigateByUrl('/tabs/business/${articleID)');
    }

}
