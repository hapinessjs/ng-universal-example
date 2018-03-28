import { Injectable } from '@angular/core';

@Injectable()
export class ClientLoggerService {
  private _logger: Console;

  constructor() {
    this._logger = console;
  }

  info(data: any) {
    this._logger.info(data);
  }

  debug(data: any) {
    this._logger.debug(data);
  }

  trace(data: any) {
    this._logger.trace(data);
  }

  warn(data: any) {
    this._logger.warn(data);
  }

  error(data: any) {
    this._logger.error(data);
  }
}
