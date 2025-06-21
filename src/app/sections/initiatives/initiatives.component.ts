import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';


@Component({
  selector: 'app-initiatives',
  imports: [
    NgClass,
    TranslatePipe
  ],
  templateUrl: './initiatives.component.html',
  standalone: true,
  styleUrl: './initiatives.component.scss'
})
export class InitiativesComponent {

}
