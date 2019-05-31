import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class ClientRequestService {

    constructor(private _logger: LoggerService) {
    }

    log(): void {
        this._logger.info('You are in the browser: Server REQUEST doesn\'t exist');
    }
}
