import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent implements OnInit {
  @Input() h1: string;
  @Input() h2: string;

  constructor() { }

  ngOnInit() {
  }

}
