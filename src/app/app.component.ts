import {Component, inject, OnInit} from '@angular/core';
import {MainComponents} from '@app/app-utils';
import {ApiService, StateService} from '@core/services';

@Component({
  selector: 'app-root',
  imports: [
    ...MainComponents
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = true;
  apiService = inject(ApiService);
  stateService = inject(StateService);

  ngOnInit() {
    this.apiService.getLandingPageData().subscribe(data => {
      this.stateService.setData(data);
      this.loading = false;
    });
  }
}
