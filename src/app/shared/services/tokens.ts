import { InjectionToken } from '@angular/core';
import { ServerRequestService } from './server-request.service';
import { ClientRequestService } from './client-request.service';
import { ClientLoggerService } from './client-logger.service';
import { ServerLoggerService } from './server-logger.service';

export const REQUEST_SERVICE = new InjectionToken<ServerRequestService | ClientRequestService>('REQUEST_SERVICE');

export const LOGGER_SERVICE = new InjectionToken<ServerLoggerService | ClientLoggerService>('LOGGER_SERVICE');
