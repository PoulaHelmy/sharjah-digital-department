import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-loader',
  imports: [
    TranslatePipe
  ],
  templateUrl: './loader.component.html',
  standalone: true,
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

}
