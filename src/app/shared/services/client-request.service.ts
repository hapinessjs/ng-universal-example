import { Inject, Injectable } from '@angular/core';
import { LOGGER_SERVICE } from './tokens';
import { ClientLoggerService } from './client-logger.service';

@Injectable()
export class ClientRequestService {

    constructor(@Inject(LOGGER_SERVICE) private _logger: ClientLoggerService) {
    }

    log(): void {
        this._logger.info('You are in the browser: Server REQUEST doesn\'t exist');
    }
}
