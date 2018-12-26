import { Component } from '@angular/core';
import { LoadingIndicatorService } from './loading-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  constructor(public service: LoadingIndicatorService) {
  }

  onClick() {
    const ref = this.service.show({ color: 'accent' });
    setTimeout(() => ref.close(), 1000);
  }
}
