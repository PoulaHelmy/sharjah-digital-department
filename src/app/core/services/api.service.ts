import {Injectable} from '@angular/core';
import {map, Observable, of} from 'rxjs';
import {MOCK_DATA} from './mock-data';
import {TranslateService} from '@ngx-translate/core';
import {English} from '@core/constants/Translation';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private translateService: TranslateService) {
  }

  getHeroData(): Observable<any> {
    return this.getDataForCurrentLanguage().pipe(map(data => data.hero));
  }

  getVisionData(): Observable<any> {
    return this.getDataForCurrentLanguage().pipe(map(data => data.vision));
  }

  getScopeData(): Observable<any> {
    return this.getDataForCurrentLanguage().pipe(map(data => data.scope));
  }

  getFooterData(): Observable<any> {
    return this.getDataForCurrentLanguage().pipe(map(data => data.footer));
  }

  // A helper to get the current language data
  private getDataForCurrentLanguage(): Observable<any> {
    return of(MOCK_DATA[this.translateService.currentLang || English])
  }
}
