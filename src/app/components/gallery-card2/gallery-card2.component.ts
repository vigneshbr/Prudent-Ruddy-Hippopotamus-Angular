import { Component, Input } from '@angular/core'

@Component({
  selector: 'gallery-card2',
  templateUrl: 'gallery-card2.component.html',
  styleUrls: ['gallery-card2.component.css'],
})
export class GalleryCard2 {
  @Input()
  rootClassName: string = ''
  @Input()
  imageSrc: string =
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&h=1000'
  @Input()
  description: string = '...'
  @Input()
  imageAlt: string = 'image'
  @Input()
  title: string = '...'
  constructor() {}
}
