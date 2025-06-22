import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-statistics-cards',
  imports: [
    TranslatePipe
  ],
  templateUrl: './statistics-cards.component.html',
  standalone: true,
  styleUrl: './statistics-cards.component.scss'
})
export class StatisticsCardsComponent {
  selectedIndex = 0;

  openCard(index: number): void {
    this.selectedIndex = index;
  }

  closeCard(): void {
    this.selectedIndex = 0;
  }
}
