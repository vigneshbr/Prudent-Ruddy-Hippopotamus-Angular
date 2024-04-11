import { Component, Input } from '@angular/core'

@Component({
  selector: 'loading-overlay',
  templateUrl: 'loading-overlay.component.html',
  styleUrls: ['loading-overlay.component.css'],
})
export class LoadingOverlay {
  @Input()
  loadingText: string = ''
  @Input()
  button1: string = 'Learn More'
  @Input()
  button: string = 'Get Started'
  rawtal2: string = ' '
  rawcv5z: string = ' '
  rawo005: string = ' '
  rawnvrn: string = ' '
  constructor() {}
}
