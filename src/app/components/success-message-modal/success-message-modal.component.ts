import { Component, Input } from '@angular/core'

@Component({
  selector: 'success-message-modal',
  templateUrl: 'success-message-modal.component.html',
  styleUrls: ['success-message-modal.component.css'],
})
export class SuccessMessageModal {
  @Input()
  button: string = 'Close'
  @Input()
  title: string = 'SUCCESS'
  @Input()
  rootClassName: string = ''
  @Input()
  label: string = 'SUCCESS'
  @Input()
  heading: string = 'Success'
  @Input()
  successMessage: string = ''
  rawmdu7: string = ' '
  rawwvb5: string = ' '
  raw7ao6: string = ' '
  raw28k2: string = ' '
  constructor() {}
}
