import { Component, Input } from '@angular/core'

@Component({
  selector: 'signup-modal',
  templateUrl: 'signup-modal.component.html',
  styleUrls: ['signup-modal.component.css'],
})
export class SignupModal {
  @Input()
  signupConfirmPassword: string = 'Confirm Password'
  @Input()
  loginUsername1: string = 'Password'
  @Input()
  signupFirstname: string = 'First Name'
  @Input()
  loginPasswordWarning1: string = ''
  @Input()
  imageAlt: string = 'image'
  @Input()
  author1: string = 'Have an account? Log In!'
  @Input()
  textinputPlaceholder13: string = 'Enter Your Password Again'
  @Input()
  loginPasswordWarning: string = ''
  @Input()
  textinputPlaceholder111: string = 'Enter Your Phone Number'
  @Input()
  signupEmail: string = 'Email'
  @Input()
  loginUsernameWarning1: string = ''
  @Input()
  imageSrc: string =
    'https://images.unsplash.com/photo-1578337159840-ec3abc0b0d17?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGluZHVzdHJpYWwlMjB3YXRlciUyMHRhbmtzfGVufDB8fHx8MTcxMjA3MzU3Nnww&ixlib=rb-4.0.3&h=1500'
  @Input()
  signupPhoneNumber: string = 'Phone Number'
  @Input()
  loginPasswordWarning2: string = ''
  @Input()
  loginPasswordWarning3: string = ''
  @Input()
  textinputPlaceholder: string = 'Enter Your First Name'
  @Input()
  loginUsernameWarning: string = ''
  @Input()
  textinputPlaceholder1: string = 'Enter Your Password'
  @Input()
  textinputRequired: string = ''
  @Input()
  signupLastname: string = 'Last Name'
  @Input()
  textinputPlaceholder11: string = 'Code'
  @Input()
  textinputPlaceholder2: string = 'Enter Your Last Name'
  @Input()
  label: string = 'SIGN UP'
  @Input()
  title: string = 'Create an Account!'
  @Input()
  textinputPlaceholder12: string = 'Enter Your Email'
  @Input()
  signupButton: string = 'Sign Up'
  constructor() {}
}
