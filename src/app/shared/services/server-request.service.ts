import { Inject, Injectable } from '@angular/core';
import { HttpServerRequest, REQUEST } from '@hapiness/ng-universal';
import { LoggerService } from './logger.service';

@Injectable()
export class ServerRequestService {

    constructor(@Inject(REQUEST) private _request: HttpServerRequest, private _logger: LoggerService) {
    }

    log(): void {
        this._logger.info('URL =>', this._request.raw.url);
    }
}
