import { Component } from '@angular/core';

/**
 * Generated class for the CustomeInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custome-input',
  templateUrl: 'custome-input.html'
})
export class CustomeInputComponent {

  text: string;

  constructor() {
    console.log('Hello CustomeInputComponent Component');
    this.text = 'Hello World';
  }

}
