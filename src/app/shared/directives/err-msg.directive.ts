import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit {

  constructor( ) {
    console.log('constructor Directive');
   }

  ngOnInit(): void {
    console.log('ngOnInit Directive');
  }

}