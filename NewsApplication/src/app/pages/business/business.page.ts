import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-business',
    templateUrl: './business.page.html',
    styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
    articles: Observable<any>;

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.articles = this.api.getBusinessNews();
        this.articles.subscribe(data => {
            console.log('My Data: ', data);
        });
    }

    openDetails(article) {
        let articleID = article.articles_id;
        this.router.navigateByUrl('/tabs/business/${articleID)');
    }

}
