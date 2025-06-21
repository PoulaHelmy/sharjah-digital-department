import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

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
    NgForOf,
    NgIf,
    TranslatePipe
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  // Data for the feature cards shown at the bottom
  featureItems: FeatureItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.featureItems = [
      {
        icon: 'M',
        title: 'Empower People',
        description: 'There are many variations of passages available.'
      },
      {
        title: 'Digital Transformation',
        description: 'There are many variations of passages available.'
      },
      {
        title: 'Datacenter',
        description: 'There are many variations of passages of Lorem Ipsum.'
      },
      {
        title: 'Active Service Directory',
        description: 'There are many variations of passages available.'
      }
    ];
  }
}
