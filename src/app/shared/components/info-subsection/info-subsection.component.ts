import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'info-subsection',
  templateUrl: './info-subsection.component.html',
  styleUrls: ['./info-subsection.component.scss']
})
export class InfoSubsectionComponent implements OnInit {
  @Input() h3: string;

  constructor() { }

  ngOnInit() {
  }

}
