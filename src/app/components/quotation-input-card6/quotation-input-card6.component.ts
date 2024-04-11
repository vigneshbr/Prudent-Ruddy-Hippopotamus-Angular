import { Component, Input } from '@angular/core'

@Component({
  selector: 'quotation-input-card6',
  templateUrl: 'quotation-input-card6.component.html',
  styleUrls: ['quotation-input-card6.component.css'],
})
export class QuotationInputCard6 {
  @Input()
  text344: string =
    'Range (min/max permissible height from Ground level) (radius to top)'
  @Input()
  text345: string = 'Please Set Height of Port from Ground'
  @Input()
  text33: string = 'Additional Requirements'
  @Input()
  text341: string = 'Port Location'
  @Input()
  textareaPlaceholder: string =
    'Mentioned Any Additional Requirements Items Here'
  @Input()
  text342: string = 'Port Size'
  @Input()
  text34: string = 'Port Name'
  @Input()
  text343: string = 'Orientation 0-360'
  @Input()
  text3: string = 'No. Ports'
  @Input()
  label3: string = 'ADDITIONAL PORTS'
  @Input()
  text31: string = 'Additional Requirements'
  @Input()
  text32: string = 'Additional Requirements'
  constructor() {}
}
