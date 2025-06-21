import {Component} from '@angular/core';
import {HeaderNavData} from '@core/constants';
import {TranslatePipe} from '@ngx-translate/core';
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
  headerNavData = HeaderNavData;
  navbarOpen = false;
  menuOpen = false;
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // A function to toggle dark mode (add your logic here)
  toggleDarkMode() {
    console.log('Dark mode toggled');
    // Example: document.body.classList.toggle('dark-theme');
  }

  // A function to switch the language (add your logic here)
  switchLanguage() {
    console.log('Language switched');
  }
}
