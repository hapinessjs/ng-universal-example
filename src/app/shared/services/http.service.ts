import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LoggerService } from './logger.service';

@Injectable()
export class HttpService {

    /**
     * Service constructor
     */
    constructor(private _httpClient: HttpClient, private _logger: LoggerService) {
    }

    getRandomUser(): Observable<any> {
        return this._httpClient
            .get('https://randomuser.me/api/', { headers: new HttpHeaders({ 'x-key-client-url': 'http://my_custom_url_public' }) })
            .pipe(
                map((_: any) => _.results),
                map(_ => _[ 0 ]),
                tap(_ => this._logger.info('https://randomuser.me/api/ =>', _))
            );
    }
}
