import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { from, interval, fromEvent, Subscription, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'rxjs-info',
  templateUrl: './rxjs-info.component.html',
  styleUrls: ['../learn-observables.component.scss']
})
export class RxjsInfoComponent implements OnInit, OnDestroy {
  data1 = from(fetch('https://jsonplaceholder.typicode.com/todos/1'));
  data1Subscription: Subscription;
  data1RespJson: Promise<JSON>;
  data1RespJsonVal: string;
  secondsCounter = interval(1000);
  secondsCounterSubscription: Subscription;
  seconds: number = 0;
  @ViewChild('mouseBox') mouseBox: ElementRef;
  mouseMoves: Observable<Event>;
  mouseCoords: number[];
  mouseMovesSubscription: Subscription;
  apiData = ajax('https://randomuser.me/api/?inc=gender,name,location,dob,picture');
  apiDataSubscription: Subscription;
  apiDataRespJSON: JSON;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mouseMoves = fromEvent(this.mouseBox.nativeElement, 'mousemove');
  }
  
  subscribeToData1() {
    this.data1Subscription = this.data1.subscribe({
      next: response => {
        this.data1RespJson = response.json();
        this.data1RespJson.then(d => {
          this.data1RespJsonVal = JSON.stringify(d);
        });
      },
      error: err => console.log('error: ', err),
      complete: () => console.log('completed')
    });
  }

  unsubscribeFromData1() {
    this.data1Subscription.unsubscribe();
    this.data1Subscription = null;
  }

  subscribeToSecondsCounter() {
    this.secondsCounterSubscription = this.secondsCounter.subscribe(n => { 
      this.seconds = n; 
    });
  }

  unsubscribeFromSecondsCounter() {
    this.secondsCounterSubscription.unsubscribe();
    this.secondsCounterSubscription = null;
  }

  subscribeToMouseMvmt() {
    this.mouseMovesSubscription = this.mouseMoves.subscribe((evt: MouseEvent) => {
      this.mouseCoords = [evt.clientX, evt.clientY];
    });
  }

  unsubscribeFromMouseMvmt() {
    this.mouseMovesSubscription.unsubscribe();
    this.mouseMovesSubscription = null;
    this.mouseCoords = null;
  }

  subscribeToApiData() {
    this.apiDataSubscription = this.apiData.subscribe(res => {
      console.log(res.response.results[0]);
      this.apiDataRespJSON = res.response.results[0];
    });
  }

  unsubscribeFromApiData() {
    this.apiDataSubscription.unsubscribe();
  }

  ngOnDestroy() {
    if (this.data1Subscription) this.unsubscribeFromData1();
    if (this.secondsCounterSubscription) this.unsubscribeFromSecondsCounter();
    if (this.mouseMovesSubscription) this.unsubscribeFromMouseMvmt();
    if (this.apiDataSubscription) this.unsubscribeFromApiData();
  }
}
