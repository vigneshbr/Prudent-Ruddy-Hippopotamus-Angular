import { Component, Input } from '@angular/core'

@Component({
  selector: 'success-message-card',
  templateUrl: 'success-message-card.component.html',
  styleUrls: ['success-message-card.component.css'],
})
export class SuccessMessageCard {
  @Input()
  description: string = ''
  @Input()
  title: string = 'SUCCESS'
  @Input()
  label1: string = 'SUCCESS'
  @Input()
  rootClassName: string = ''
  @Input()
  label: string = 'SUCCESS'
  @Input()
  description1: string = ''
  @Input()
  button: string = 'Close'
  @Input()
  title1: string = 'SUCCESS'
  @Input()
  button1: string = 'Close'
  constructor() {}
}
