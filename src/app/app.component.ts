import {Component} from '@angular/core';
import {MainComponents} from '@app/app-utils';

@Component({
  selector: 'app-root',
  imports: [
    ...MainComponents
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
