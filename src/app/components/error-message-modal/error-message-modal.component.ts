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
  rawgmu0: string = ' '
  rawfpug: string = ' '
  rawonl0: string = ' '
  rawz65k: string = ' '
  constructor() {}
}
