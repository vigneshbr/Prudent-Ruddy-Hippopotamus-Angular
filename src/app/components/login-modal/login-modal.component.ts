import { Component, Input } from '@angular/core'

@Component({
  selector: 'login-modal',
  templateUrl: 'login-modal.component.html',
  styleUrls: ['login-modal.component.css'],
})
export class LoginModal {
  @Input()
  textinputPlaceholder2: string = 'Enter Your Username'
  @Input()
  loginUsername2: string = 'Username'
  @Input()
  loginUsername1: string = 'Password'
  @Input()
  loginPasswordWarning: string = ''
  @Input()
  loginGreetings: string = 'Welcome Back!'
  @Input()
  textinputPlaceholder1: string = 'Enter Your Password'
  @Input()
  rootClassName1: string = ''
  @Input()
  imageSrc1: string =
    'https://images.unsplash.com/photo-1636649389054-e5dcea139e64?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxpbmR1c3RyaWFsJTIwd2F0ZXIlMjB0YW5rc3xlbnwwfHx8fDE3MTE5ODUyMzl8MA&ixlib=rb-4.0.3&w=500'
  @Input()
  author: string = "Don't have an account? Sign Up"
  @Input()
  imageAlt1: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  loginButton: string = 'Login'
  @Input()
  loginUsernameWarning1: string = ''
  constructor() {}
}
