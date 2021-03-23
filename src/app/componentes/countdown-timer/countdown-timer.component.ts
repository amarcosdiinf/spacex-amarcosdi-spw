import { Component, Input, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  private subscription: Subscription;

  @Input() inputDate: string;

  dateFinal: Date;
  timeDifference;
  secondsToDday;
  minutesToDday;
  hoursToDday;
  daysToDday;
  
  constructor() { 
    
  }

  ngOnInit() {
    this.dateFinal = new Date(this.inputDate);

    this.subscription = interval(1000)
        .subscribe(x => { this.getTimeDifference(); });
 }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getTimeDifference(){
    let now = new Date();
    this.timeDifference = this.dateFinal.getTime() - now.getTime();

    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference) {
    this.secondsToDday = Math.floor((timeDifference) / (1000) % 60);
    this.minutesToDday = Math.floor((timeDifference) / (1000 * 60) % 60);
    this.hoursToDday = Math.floor((timeDifference) / (1000 * 60 * 60) % 24);
    this.daysToDday = Math.floor((timeDifference) / (1000 * 60 * 60 * 24));
}
}
