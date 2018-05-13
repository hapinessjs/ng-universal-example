import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { REQUEST_SERVICE } from '../services/tokens';
import { ServerRequestService } from '../services/server-request.service';
import { ClientRequestService } from '../services/client-request.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor(@Inject(REQUEST_SERVICE) private _requestService: ServerRequestService | ClientRequestService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                tap((event: HttpEvent<any>) =>
                    of(event)
                        .pipe(
                            filter(evt => evt instanceof HttpResponse)
                        )
                        .subscribe(_ => this._requestService.log())
                )
            );
    }
}
