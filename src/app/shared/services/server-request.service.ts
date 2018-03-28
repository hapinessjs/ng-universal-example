import { Inject, Injectable } from '@angular/core';
import { REQUEST, Request } from '@hapiness/ng-universal';
import { LOGGER_SERVICE } from './tokens';
import { ServerLoggerService } from './server-logger.service';

@Injectable()
export class ServerRequestService {

  constructor(@Inject(REQUEST) private _request: Request, @Inject(LOGGER_SERVICE) private _logger: ServerLoggerService) {
  }

  log(): void {
    this._logger.info(this._request);
  }
}
