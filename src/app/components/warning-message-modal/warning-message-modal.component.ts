import { Component, Input } from '@angular/core'

@Component({
  selector: 'warning-message-modal',
  templateUrl: 'warning-message-modal.component.html',
  styleUrls: ['warning-message-modal.component.css'],
})
export class WarningMessageModal {
  @Input()
  heading: string = 'WARNING!'
  @Input()
  successMessage: string = ''
  @Input()
  cancelButton: string = 'Cancel'
  @Input()
  title: string = 'Please Note!'
  @Input()
  submitButton: string = 'Submit'
  rawy3ka: string = ' '
  raw04e3: string = ' '
  rawquj0: string = ' '
  raws49m: string = ' '
  constructor() {}
}
