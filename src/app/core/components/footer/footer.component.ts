import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {FooterLinks, HeaderNavData} from '@core/constants';

@Component({
  selector: 'app-footer',
  imports: [
    TranslatePipe
  ],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerLinks = FooterLinks;
  headerNavData = HeaderNavData;
}
