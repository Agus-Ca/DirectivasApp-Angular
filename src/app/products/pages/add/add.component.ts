import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent {

  constructor(
    private formBuilder:FormBuilder
  ) { }

  myForm: FormGroup = this.formBuilder.group({
    name: [ '', Validators.required ]
  });

  color: string = 'red';

  hasError( field:string ): boolean {
    return this.myForm.get(field)?.invalid || false;
  }

  changeColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}