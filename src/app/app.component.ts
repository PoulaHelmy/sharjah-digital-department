import {Component, inject, OnInit} from '@angular/core';
import {MainComponents} from '@app/app-utils';
import {ApiService, StateService} from '@core/services';
import {TranslateService} from '@ngx-translate/core';
import {Arabic, English, LTR, RTL} from '@core/constants';
import {distinctUntilChanged} from 'rxjs';

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
  translateService = inject(TranslateService);

  ngOnInit() {
    this.translateService.use(English);
    this.apiService.getLandingPageData().subscribe(data => {
      this.stateService.setData(data);
      this.loading = false;
    });
    this.translateService.onLangChange.pipe(distinctUntilChanged()).subscribe((event) => {
      document.documentElement.dir = event.lang === Arabic ? RTL : LTR;
    });
  }
}
