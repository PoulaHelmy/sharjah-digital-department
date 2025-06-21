import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DataResponse} from '@core/models/response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getLandingPageData(): Observable<DataResponse> {
    return this.http.get<DataResponse>('./assets/mock-data/db.json')
  }
}
