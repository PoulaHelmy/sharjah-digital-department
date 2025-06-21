import {Component, inject, OnInit} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {StatisticsCardComponent} from '@sections/hero/statistics-card/statistics-card.component';
import {Arabic} from '@core/constants';
import {distinctUntilChanged} from 'rxjs';

// Interface for the feature items for strong typing
interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    TranslatePipe,
    StatisticsCardComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  translateService = inject(TranslateService);
  readonly items = [1, 2, 3, 4];
  currentIndex = 0;
  isArabic = false;

  constructor() {
  }

  get hasNext(): boolean {
    return this.currentIndex < this.items.length - 1;
  }


  get hasPrevious(): boolean {
    return this.currentIndex > 0;
  }

  goNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  goPrevious(): void {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  ngOnInit(): void {
    this.translateService.onLangChange.pipe(distinctUntilChanged()).subscribe((event) => {
      this.isArabic = event.lang === Arabic;
    });
  }
}
