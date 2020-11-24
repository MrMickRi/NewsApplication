import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
    time;
    hours;
    date;
    month;
    year;
    
  constructor() {
        setInterval(() => {this.time = new Date();
                            this.date = new Date();
                        }, 1000);
  }

  ngOnInit() {
      this.startTime();
}
    startTime(){
     this.hours = new Date().getHours();
     this.date = new Date().getDate();
     this.month = new Date().getMonth();
     this.year = new Date().getFullYear();
  }
}
