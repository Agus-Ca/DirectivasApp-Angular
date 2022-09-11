import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrMsgDirective implements OnInit {

  constructor( private element: ElementRef<HTMLElement> ) {
    this.htmlElement = element;
  }
  
  ngOnInit(): void {
    this.setColor();
    this.setText();
    this.setStyles();
  }
  
  @Input() errorMsgColor: string = 'red';
  @Input() errorMsgText: string = '* required';

  htmlElement: ElementRef<HTMLElement>;

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.errorMsgColor;
  }

  setText(): void {
    this.htmlElement.nativeElement.innerText = this.errorMsgText;
  }

  setStyles(): void {
    this.htmlElement.nativeElement.classList.add('form-text')
  }
}