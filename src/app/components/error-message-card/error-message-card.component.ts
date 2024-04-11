import { Component, Input } from '@angular/core'

@Component({
  selector: 'error-message-card',
  templateUrl: 'error-message-card.component.html',
  styleUrls: ['error-message-card.component.css'],
})
export class ErrorMessageCard {
  @Input()
  button: string = 'Close'
  @Input()
  imageAlt: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  when: string = '3 days ago'
  @Input()
  author: string = 'Jane Doe'
  @Input()
  profileSrc: string =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200'
  @Input()
  description: string = ''
  @Input()
  label: string = 'ERROR'
  @Input()
  imageSrc: string =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000'
  @Input()
  profileAlt: string = 'profile'
  @Input()
  title: string = 'Please Try Again After Sometime'
  constructor() {}
}
