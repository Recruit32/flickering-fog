import { Directive, OnInit, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[tC]'
})
export class TextColorDirective implements OnInit {
  @Input() t: number = 0;
  @HostBinding('style.color') textColor: string;

  ngOnInit() {
    this.textColor = this.getTextColor();
  }

  getTextColor() {
    switch (+this.t) {
      case 1:
        return 'slategray';
      case 2:
        return '#690';
      case 3:
        return '#07a';
      case 4:
        return '#dd4a68'
      case 5:
        return '#800';
      default:
        return 'black';
    }
  }
}