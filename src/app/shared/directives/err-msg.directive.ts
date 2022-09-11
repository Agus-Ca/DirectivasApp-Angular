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
  
  @Input() set errorMsgColor( color: string) {
    this._color = color;
    this.setColor();
  }
  @Input() set errorMsgText( text: string ) {
    this._text = text;
    this.setText();
  }
  @Input() set errorMsgShow( show: boolean ) {
    if ( show === true ) {
      this.htmlElement.nativeElement.classList.remove('hidden');
    } 
    else {
      this.htmlElement.nativeElement.classList.add('hidden');
    }
  }

  htmlElement: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _text: string = '* required';

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setText(): void {
    this.htmlElement.nativeElement.innerText = this._text;
  }

  setStyles(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
}