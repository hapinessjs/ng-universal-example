import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class ClientReplyService {

    constructor(private _logger: LoggerService) {
    }

    header(): void {
        this._logger.info('You are in the browser: Server REPLY doesn\'t exist');
    }

    redirect(): void {
        this._logger.info('You are in the browser: Server REPLY doesn\'t exist, you will not be redirect');
    }
}
