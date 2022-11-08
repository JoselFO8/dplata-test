import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public helpLocateUp: boolean;

  constructor() {
    this.helpLocateUp = false
  }

  changeHelpLocate():void {
    this.helpLocateUp = true
  }
}
