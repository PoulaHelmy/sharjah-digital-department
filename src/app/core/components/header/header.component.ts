import {Component, HostListener, inject} from '@angular/core';
import {Arabic, English, HeaderNavData, LTR, RTL} from '@core/constants';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {IconComponent} from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslatePipe,
    IconComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  translateService = inject(TranslateService);
  headerNavData = HeaderNavData;
  isMobileMenuOpen = false;
  isScrolled = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  changeLang() {
    // This method can be used to change the language if needed
    // For example, you can use a service to change the language
    // this.translateService.use('en'); // Example for changing to English
    this.translateService.use(this.translateService.currentLang === English ? Arabic : English);
    document.documentElement.dir = this.translateService.currentLang === Arabic ? RTL : LTR;
  }
}
