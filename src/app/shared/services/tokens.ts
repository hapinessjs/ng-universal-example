import { InjectionToken } from '@angular/core';
import { ClientReplyService } from './client-reply.service';
import { ClientRequestService } from './client-request.service';
import { ServerReplyService } from './server-reply.service';
import { ServerRequestService } from './server-request.service';

export const REQUEST_SERVICE = new InjectionToken<ServerRequestService | ClientRequestService>('REQUEST_SERVICE');
export const REPLY_SERVICE = new InjectionToken<ServerReplyService | ClientReplyService>('REPLY_SERVICE');
