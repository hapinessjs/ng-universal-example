import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class HttpService {

  /**
   * Service constructor
   */
  constructor(private _httpClient: HttpClient) {
  }

  getRandomUser(): Observable<any> {
    return this._httpClient
      .get('https://randomuser.me/api/', { headers: new HttpHeaders({ 'x-key-client-url': 'http://my_custom_url_public' }) })
      .pipe(
        map((_: any) => _.results),
        map(_ => _[0]),
        tap(_ => console.log('https://randomuser.me/api/ =>', _))
      );
  }
}
