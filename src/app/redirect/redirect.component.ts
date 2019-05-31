import { Component, Inject, OnInit } from '@angular/core';
import { ClientReplyService } from '../shared/services/client-reply.service';
import { ServerReplyService } from '../shared/services/server-reply.service';
import { REPLY_SERVICE } from '../shared/services/tokens';

@Component({
    selector: 'app-redirect',
    templateUrl: './redirect.component.html',
    styleUrls: [ './redirect.component.css' ]
})
export class RedirectComponent implements OnInit {

    constructor(@Inject(REPLY_SERVICE) private _replyService: ServerReplyService | ClientReplyService) {
    }

    ngOnInit() {
        this._replyService.redirect('/');
    }

}
