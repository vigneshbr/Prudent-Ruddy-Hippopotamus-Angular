import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {
  @Input()
  text4: string = ''
  @Input()
  text1: string = 'About'
  @Input()
  text2: string = 'Products'
  @Input()
  rootClassName: string = ''
  @Input()
  text: string = 'Home'
  @Input()
  text3: string = 'Contact Us'
  constructor() {}
}
