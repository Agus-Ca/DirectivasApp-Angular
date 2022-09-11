import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrMsgDirective implements OnInit {

  constructor( private element: ElementRef<HTMLElement> ) {
    this.htmlElement = element;
    console.log(this.errorMsgColor);
  }
  
  ngOnInit(): void {
    this.setColor();
  }
  
  @Input() errorMsgColor: string = 'red';

  htmlElement: ElementRef<HTMLElement>;

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.errorMsgColor;
  }
}