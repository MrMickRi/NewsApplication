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
    businesses: Observable<any>;
    
    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        console.log('Starting Call');
        this.businesses = this.api.getBusinessNews();
        console.log(this.businesses);
        this.businesses.subscribe(data => {
            console.log('My Data: ', data);
        });
    }

    openArticle(business) {
        let businessID = business.business_id;
        this.router.navigateByUrl('/tabs/business/${businessID}')
    }

}
