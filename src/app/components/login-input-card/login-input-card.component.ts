import { Component, Input } from '@angular/core'

@Component({
  selector: 'login-input-card',
  templateUrl: 'login-input-card.component.html',
  styleUrls: ['login-input-card.component.css'],
})
export class LoginInputCard {
  @Input()
  loginPasswordWarning: string = ''
  @Input()
  textinputPlaceholder: string = 'Enter Your Username'
  @Input()
  imageAlt: string = 'image'
  @Input()
  author: string = "Don't have an account? Sign Up"
  @Input()
  textinputPlaceholder1: string = 'Enter Your Password'
  @Input()
  loginUsername1: string = 'Password'
  @Input()
  rootClassName: string = ''
  @Input()
  loginUsernameWarning: string = ''
  @Input()
  loginButton: string = 'Login'
  @Input()
  imageSrc: string =
    'https://images.unsplash.com/photo-1636649389054-e5dcea139e64?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxpbmR1c3RyaWFsJTIwd2F0ZXIlMjB0YW5rc3xlbnwwfHx8fDE3MTE5ODUyMzl8MA&ixlib=rb-4.0.3&w=500'
  @Input()
  loginUsername: string = 'Username'
  constructor() {}
}
