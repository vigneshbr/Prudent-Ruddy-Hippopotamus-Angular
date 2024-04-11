import { Component, Input } from '@angular/core'

@Component({
  selector: 'quotation-input-card2',
  templateUrl: 'quotation-input-card2.component.html',
  styleUrls: ['quotation-input-card2.component.css'],
})
export class QuotationInputCard2 {
  @Input()
  inputBespokeHeight1: string = 'Enter Required Height'
  @Input()
  lableApproximateHeight1: string = 'Approximate Height'
  @Input()
  lableTankVolume11: string = 'Tank Volume:'
  @Input()
  displayApproximateHeight1: string = '99999'
  @Input()
  label1111: string = 'BESPOKE VOLUME TANK DETAILS'
  @Input()
  tankBespoke1: string = 'Bespoke Volume Tank'
  @Input()
  lableBespokeUninsulatedDiameter1: string = 'Bespoke Uninsulated Diameter'
  @Input()
  label112: string = 'STANDARD VOLUME TANK DETAILS'
  @Input()
  lableUninsulatedDiameter1: string = 'Uninsulated Diameter'
  @Input()
  tankStandard1: string = 'Standard Volume Tank'
  @Input()
  rootClassName: string = ''
  @Input()
  text4: string = 'Choose Tank Type'
  @Input()
  lableBespokeHeight1: string = 'Bespoke Height'
  @Input()
  displayUninsulatedDiameter1: string = '99999'
  @Input()
  label41: string = 'TANK TYPE'
  tankTypeToggle: number = 1
  constructor() {}
}
