import {Component, HostListener, inject} from '@angular/core';
import {Arabic, English, HeaderNavData} from '@core/constants';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslatePipe
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
    console.log("=>(header.component.ts:32) changeLang", this.translateService.currentLang === English ? Arabic : English);
    console.log("=>(header.component.ts:33) this.translateService.currentLang", this.translateService.currentLang);
    // This method can be used to change the language if needed
    // For example, you can use a service to change the language
    // this.translateService.use('en'); // Example for changing to English
    this.translateService.use(this.translateService.currentLang === English ? Arabic : English);
  }
}
