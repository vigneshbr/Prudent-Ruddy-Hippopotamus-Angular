import { Component, Input } from '@angular/core'

@Component({
  selector: 'error-message-modal',
  templateUrl: 'error-message-modal.component.html',
  styleUrls: ['error-message-modal.component.css'],
})
export class ErrorMessageModal {
  @Input()
  heading: string = 'Error'
  @Input()
  button: string = 'Close'
  @Input()
  title: string = 'An Error Occurred!'
  @Input()
  label: string = 'ERROR'
  @Input()
  description: string = ''
  @Input()
  rootClassName: string = ''
  rawrw57: string = ' '
  raw556d: string = ' '
  rawwb1q: string = ' '
  rawpyor: string = ' '
  constructor() {}
}
