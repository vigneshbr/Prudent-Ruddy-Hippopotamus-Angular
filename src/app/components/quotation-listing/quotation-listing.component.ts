import { Component, Input } from '@angular/core'

@Component({
  selector: 'quotation-listing',
  templateUrl: 'quotation-listing.component.html',
  styleUrls: ['quotation-listing.component.css'],
})
export class QuotationListing {
  @Input()
  label31: string = 'YOUR QUOTATIONS LIST'
  @Input()
  heading1: string = 'Quotations List'
  tankTypeToggle: number = 1
  constructor() {}
}
