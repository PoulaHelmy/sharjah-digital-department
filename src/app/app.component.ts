import {Component} from '@angular/core';
import {HeroComponent} from '@sections/hero/hero.component';
import {HeaderComponent} from '@core/components/header/header.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, HeaderComponent, TranslatePipe],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'ssd-task';
}
