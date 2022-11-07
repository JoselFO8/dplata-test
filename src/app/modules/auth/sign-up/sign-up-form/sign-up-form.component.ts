import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form, [app-sign-up-form]',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
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

  ngOnInit(): void {
    
  }

  get form() {
    return this.signUpForm.controls;
  }
  
  get formDirection() {
    return this.signUpForm.controls.direction.controls;
  }

  authenticate() {
    // console.log('Autenticated-Prueba', this.signUpForm);
    // console.log('Autenticated-Valid', this.signUpForm.valid);
    this.signUpSubmmitted = true
    if(!this.signUpForm.valid) {
      return
    }
    // console.log('Autenticated', this.signUpForm);
    this.router.navigateByUrl('/client')

  }

}
