import {Injectable} from '@angular/core';
import {DataResponse} from '@core/models/response';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  landingPageData!: DataResponse;

  setData(data: DataResponse) {
    this.landingPageData = data;
  }

  getData(): DataResponse {
    return this.landingPageData;
  }
}
