import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {IconComponent} from '@shared/components/icon/icon.component';
import {FooterLinks, HeaderNavData} from '@core/constants';


@Component({
  selector: 'app-footer',
  imports: [
    TranslatePipe,
    IconComponent
  ],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerLinks = FooterLinks;
  headerNavData = HeaderNavData;
}
