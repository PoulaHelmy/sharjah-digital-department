import {Component} from '@angular/core';
import {NavItem} from '@core/components/header/header.interface';
import {Nav_Data} from '@core/components/header/header-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems: NavItem[] = Nav_Data;
}
