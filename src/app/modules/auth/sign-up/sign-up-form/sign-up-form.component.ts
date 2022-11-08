import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form, [app-sign-up-form]',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {
  @Output() newHelpEvent = new EventEmitter<boolean>();
  public signUpForm;
  public signUpSubmmitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signUpForm = this.formBuilder.group(
      {
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(10)
        ]
      ],
      documentType: [
        '',
        Validators.required,
      ],
      documentNumber: [
        '',
        [
          Validators.required,
          Validators.maxLength(12)
        ]
      ],
      city: [
        '',
          Validators.required,
      ],
      // Subcampo
      direction: this.formBuilder.group({
        roadType: [
          '',
            Validators.required,
        ],
        primaryRoadNumber: [
          '',
            Validators.required,
        ],
        secondaryRoadNumber: [
          '',
            Validators.required,
        ],
        specificNumber: [
          '',
            Validators.required,
        ],
      }),
      neighborhood: [
        ''
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[3]\d*$/
          )
        ]
      ],
    })
  }

  get form() {
    return this.signUpForm.controls;
  }
  
  get formDirection() {
    return this.signUpForm.controls.direction.controls;
  }

  changeLocation():void {
    this.newHelpEvent.emit()    
  }

  authenticate() {
    this.signUpSubmmitted = true
    console.log(this.signUpForm.valid);
    
    if(!this.signUpForm.valid) {
      return
    }
    this.router.navigateByUrl('/client')
  }

}
