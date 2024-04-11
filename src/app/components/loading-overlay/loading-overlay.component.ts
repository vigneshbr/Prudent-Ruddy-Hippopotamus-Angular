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
  raw1qxr: string = ' '
  rawtr8q: string = ' '
  rawgedm: string = ' '
  rawte7m: string = ' '
  constructor() {}
}
