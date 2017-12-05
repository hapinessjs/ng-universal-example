import { Inject, Injectable } from '@angular/core';
import { REQUEST, Request } from '@hapiness/ng-universal';

@Injectable()
export class ServerRequestService {

  constructor(@Inject(REQUEST) private _request: Request) { }

  log(): void {
    console.log(this._request);
  }
}
