import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-our-vision',
  imports: [
    TranslatePipe
  ],
  templateUrl: './our-vision.component.html',
  standalone: true,
  styleUrl: './our-vision.component.scss'
})
export class OurVisionComponent {

}
