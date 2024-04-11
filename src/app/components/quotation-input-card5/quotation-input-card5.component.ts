import { Component, Input } from '@angular/core'

@Component({
  selector: 'quotation-input-card5',
  templateUrl: 'quotation-input-card5.component.html',
  styleUrls: ['quotation-input-card5.component.css'],
})
export class QuotationInputCard5 {
  @Input()
  textareaPlaceholder: string =
    'Mentioned Any Additional Requirements Items Here'
  @Input()
  textinputPlaceholder: string = 'Mentioned Required Additional Items Here'
  @Input()
  rootClassName: string = ''
  @Input()
  text: string = 'Additional Requirements'
  @Input()
  label: string = 'ADDITIONAL ITEMS'
  constructor() {}
}
