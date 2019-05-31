import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    private readonly _logger: Console;

    constructor() {
        this._logger = console;
    }

    info(...args: any[]): void {
        this._logger.info.call(this._logger, ...args);
    }

    debug(...args: any[]): void {
        this._logger.debug.call(this._logger, ...args);
    }

    trace(...args: any[]): void {
        this._logger.trace.call(this._logger, ...args);
    }

    warn(...args: any[]): void {
        this._logger.warn.call(this._logger, ...args);
    }

    error(...args: any[]): void {
        this._logger.error.call(this._logger, ...args);
    }
}
