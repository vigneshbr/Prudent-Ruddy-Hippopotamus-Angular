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
  rawioeb: string = ' '
  raw5jvl: string = ' '
  raw35b3: string = ' '
  rawcuab: string = ' '
  constructor() {}
}
