import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { ClientLoggerService } from './client-logger.service';
import { ServerLoggerService } from './server-logger.service';
import { LOGGER_SERVICE } from './tokens';

@Injectable()
export class HttpService {

  /**
   * Service constructor
   */
  constructor(private _httpClient: HttpClient, @Inject(LOGGER_SERVICE) private _logger: ClientLoggerService | ServerLoggerService) {
  }

  getRandomUser(): Observable<any> {
    return this._httpClient
      .get('https://randomuser.me/api/', { headers: new HttpHeaders({ 'x-key-client-url': 'http://my_custom_url_public' }) })
      .pipe(
        map((_: any) => _.results),
        map(_ => _[0]),
        tap(_ => this._logger.info('https://randomuser.me/api/ =>', _))
      );
  }
}
