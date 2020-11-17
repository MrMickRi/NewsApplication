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
    episodes: Observable<any>;

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.episodes = this.api.getBusinessNews();
        this.episodes.subscribe(data => {
            console.log('My Data: ', data);
        });
    }

    openDetails(episode) {
        let episodeID = episode.episode_id;
        this.router.navigateByUrl('/tabs/business/${episodeI)');
    }

}
