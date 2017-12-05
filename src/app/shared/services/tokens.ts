import { InjectionToken } from '@angular/core';
import { ServerRequestService } from './server-request.service';
import { ClientRequestService } from './client-request.service';

export const REQUEST_SERVICE = new InjectionToken<ServerRequestService | ClientRequestService>('REQUEST_SERVICE');
