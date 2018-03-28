import { Injectable } from '@angular/core';
import { Hapiness } from '@hapiness/core';
import { LoggerService } from '@hapiness/logger';

@Injectable()
export class ServerLoggerService {
  private readonly _logger: LoggerService;

  constructor() {
    this._logger = Hapiness['module'].di.get(LoggerService) as LoggerService;
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
