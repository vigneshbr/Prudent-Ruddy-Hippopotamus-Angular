import { Component, Input } from '@angular/core'

@Component({
  selector: 'quotation-form',
  templateUrl: 'quotation-form.component.html',
  styleUrls: ['quotation-form.component.css'],
})
export class QuotationForm {
  @Input()
  label1121: string = 'STANDARD VOLUME TANK DETAILS'
  @Input()
  text23: string = 'Working Pressure'
  @Input()
  lableUninsulatedDiameter11: string = 'Uninsulated Diameter'
  @Input()
  lableVolumeOfTank: string = 'Volume Of Tank'
  @Input()
  label2: string = 'OTHERS'
  @Input()
  lableTankVolume111: string = 'Tank Volume:'
  @Input()
  text2: string = 'External Casing Color'
  @Input()
  inputBespokeHeight11: string = 'Enter Required Height'
  @Input()
  text231: string = 'Baffle Plate'
  @Input()
  text11311: string = 'Legs'
  @Input()
  quotationSave: string = 'Save'
  @Input()
  text112: string = 'Internal/External'
  @Input()
  displayPortsAndFlanges: string = '*****'
  @Input()
  label31: string = 'ADDITIONAL PORTS'
  @Input()
  pricePerTankText: string = 'Price Per Tank:'
  @Input()
  lableApproximateHeight11: string = 'Approximate Height'
  @Input()
  lableFinishedDiameter: string = 'Finished Diameter'
  @Input()
  displayVolumeOfTank: string = '*****'
  @Input()
  lableStandardVolumeTank: string = 'Standard Volume Tank'
  @Input()
  text21: string = 'Insulation Thickness'
  @Input()
  textPricePerTank: string = '(Excluding VAT)'
  @Input()
  text41: string = 'Choose Tank Type'
  @Input()
  lableBespokeVolumeTank: string = 'Bespoke Volume Tank'
  @Input()
  pricePerTank: string = '*******'
  @Input()
  lableBespokeUninsulatedDiameter11: string = 'Bespoke Uninsulated Diameter'
  @Input()
  heading1: string = 'Your Quotation'
  @Input()
  text22: string = 'Quantity'
  @Input()
  lablePortsAndFlanges: string = 'No. Of Ports & Flanges'
  @Input()
  textinputPlaceholder1: string = 'Enter the your business'
  @Input()
  textinputPlaceholder3: string = 'Quantity Required'
  @Input()
  text211: string = 'Horizontal/Vertical Standing Tank'
  @Input()
  displayApproximateHeight11: string = '*****'
  @Input()
  displayUninsulatedDiameter11: string = '*****'
  @Input()
  quotationSubmit: string = 'Submit'
  @Input()
  rootClassName: string = ''
  @Input()
  text1131: string = 'Number Of Baffles'
  @Input()
  lableBespokeHeight11: string = 'Bespoke Height'
  @Input()
  rootClassName1: string = ''
  @Input()
  displayFinishedDiameter: string = '*****'
  @Input()
  text113: string = 'Tank Type'
  @Input()
  label4111: string = 'TANK DETAILS'
  @Input()
  label411: string = 'TANK TYPE'
  @Input()
  quotationID: string = 'Quotation Id:'
  @Input()
  rootClassName2: string = ''
  @Input()
  label11111: string = 'BESPOKE VOLUME TANK DETAILS'
  @Input()
  text11: string = 'Plastic Top/Bottom Color'
  @Input()
  rootClassName3: string = ''
  @Input()
  text1111: string = 'Tank Material'
  @Input()
  text2311: string = 'Lifting Eyes >3000 As Standard'
  @Input()
  text111: string = 'Site Location'
  @Input()
  quotationIDDisplay: string = '**********'
  @Input()
  label: string = 'GENERAL DETAILS'
  @Input()
  quotationReset: string = 'Reset'
  @Input()
  label1: string = 'SPECIFICATIONS'
  @Input()
  text1: string = 'Company Name'
  tankTypeToggle: number = 1
  constructor() {}
}
