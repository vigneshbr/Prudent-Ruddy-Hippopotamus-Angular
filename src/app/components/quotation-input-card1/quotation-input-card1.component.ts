import { Component, Input } from '@angular/core'

@Component({
  selector: 'quotation-input-card1',
  templateUrl: 'quotation-input-card1.component.html',
  styleUrls: ['quotation-input-card1.component.css'],
})
export class QuotationInputCard1 {
  @Input()
  textinputPlaceholder: string = 'Enter the your business'
  @Input()
  profileAlt: string = 'profile'
  @Input()
  time: string = '5 min read'
  @Input()
  title: string = 'Lorem ipsum dolor sit amet'
  @Input()
  text: string = 'Company Name'
  @Input()
  author: string = 'Jon Doe'
  @Input()
  rootClassName: string = ''
  @Input()
  label: string = 'GENERAL DETAILS'
  @Input()
  imageSrc: string =
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1500'
  @Input()
  imageAlt: string = 'image'
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.'
  @Input()
  profileSrc: string =
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&w=200'
  constructor() {}
}
