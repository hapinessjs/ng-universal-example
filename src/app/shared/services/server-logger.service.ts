import { Injectable } from '@angular/core';
import { Hapiness } from '@hapiness/core';
import { LoggerService } from '@hapiness/logger';

@Injectable()
export class ServerLoggerService {
  private _logger: LoggerService;

  constructor() {
    this._logger = Hapiness['module'].di.get(LoggerService) as LoggerService;
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
