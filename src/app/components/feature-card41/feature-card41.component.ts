import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card41',
  templateUrl: 'feature-card41.component.html',
  styleUrls: ['feature-card41.component.css'],
})
export class FeatureCard41 {
  @Input()
  title: string = 'The Team'
  @Input()
  description: string =
    'We believe in delivering water tanks that perfectly match your needs and seamlessly integrate into your space. Our design process begins with a thorough consultation to understand your requirements, constraints, and objectives. From there, our team collaborates closely with you, providing expert guidance and utilizing state-of-the-art technology to develop precise 3D designs and renderings. This collaborative approach ensures that every aspect of the tank, from dimensions to materials to accessories, is tailored to your specifications.'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
