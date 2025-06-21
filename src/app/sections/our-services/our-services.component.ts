import {Component, inject, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {StateService} from '@core/services';
import {Category, Item} from '@core/models/response';
import {IconComponent} from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-our-services',
  imports: [
    TranslatePipe,
    IconComponent
  ],
  templateUrl: './our-services.component.html',
  standalone: true,
  styleUrl: './our-services.component.scss',
})
export class OurServicesComponent implements OnInit {
  public stateService = inject(StateService);
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  services: Item[] = [];

  ngOnInit() {
    this.categories = this.stateService.getData().services.categories || [];
    this.services = this.stateService.getData().services.items;
    this.selectedCategory = this.categories.length > 0 ? this.categories[0] : null;
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    if (category.id === 0) {
      this.services = this.stateService.getData().services.items;
    } else {
      this.services = this.stateService.getData().services.items.filter(item => item.categoryId === category.id);
    }
  }
}
