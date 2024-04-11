import { Component, Input } from '@angular/core'

@Component({
  selector: 'quotation-input-card4',
  templateUrl: 'quotation-input-card4.component.html',
  styleUrls: ['quotation-input-card4.component.css'],
})
export class QuotationInputCard4 {
  @Input()
  text231: string = 'Baffle Plate'
  @Input()
  text1131: string = 'Number Of Baffles'
  @Input()
  text2311: string = 'Lifting Eyes >3000 As Standard'
  @Input()
  rootClassName: string = ''
  @Input()
  label: string = 'OTHERS'
  @Input()
  text11311: string = 'Legs'
  constructor() {}
}
