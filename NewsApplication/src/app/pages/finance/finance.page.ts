import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {

    articles: Observable<any>;
    data: null

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.articles = this.api.getFinanceNews();
        this.articles.subscribe(data => {
            this.data = data.response.results
            console.log(data);
        });
    }

    openDetails(article) {
        let articleID = article.articles_id;
        this.router.navigateByUrl('/tabs/finance/${articleID)');
    }

}

