import { Directive, OnInit, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[bH]'
})
export class BasicHighlightDirective implements OnInit {
  @Input() c: string = 'y';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.textDecoration') textDecoration: string;
  @HostBinding('style.textDecorationColor') textDecorationColor: string;

  ngOnInit() {
    this.backgroundColor = this.getColor();
    this.textDecoration = this.getTextDecoration();
  }

  getColor(alpha = '55') {
    const color = this.c.replace(/[^roygbiv]/g, '')[0];

    switch(color) {
      case 'r':
        return `#ff0000${alpha}`;
      case 'o':
        return `#ffa500${alpha}`;
      case 'g':
        return `#008000${alpha}`;
      case 'b':
        return `#0000ff${alpha}`;
      case 'i':
        return `#4b0082${alpha}`;
      case 'v':
        return `#ee82ee${alpha}`;
      default:
        return `#ffff00${alpha}`;
    }
  }

  getTextDecoration() {
    const d = this.c.replace(/[^uU]/g, '')[0];
    
    if (d) {
      this.textDecorationColor = this.getColor('');
    }

    if (d === 'u') {
      return 'underline';
    } else if (d === 'U') {
      this.backgroundColor = 'white';
      return 'underline';
    }
    return 'none';
  }
}