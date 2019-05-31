import { Inject, Injectable } from '@angular/core';
import { HttpServerReply, REPLY } from '@hapiness/ng-universal';

@Injectable()
export class ServerReplyService {

    constructor(@Inject(REPLY) private _reply: HttpServerReply) {
    }

    header(key: string, value: string): void {
        this._reply.header(key, value);
    }

    redirect(url: string) {
        this._reply.redirect(url);
    }
}
