import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card4',
  templateUrl: 'feature-card4.component.html',
  styleUrls: ['feature-card4.component.css'],
})
export class FeatureCard4 {
  @Input()
  rootClassName: string = ''
  @Input()
  title: string = 'The Company'
  @Input()
  description: string =
    'At TankBuilder.ie, the premier destination for all your customized water storage solutions. With our extensive experience, cutting-edge technology, and unwavering commitment to excellence, we specialize in designing and manufacturing bespoke water tanks that meet your specific requirements. Whether you need a water tank for residential, commercial, or industrial purposes, we are your reliable partner.'
  constructor() {}
}
