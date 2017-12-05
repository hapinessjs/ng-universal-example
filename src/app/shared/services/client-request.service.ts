import { Injectable } from '@angular/core';

@Injectable()
export class ClientRequestService {

  constructor() { }

  log(): void {
    console.log('You are in the browser: Server REQUEST doesn\'t exist');
  }
}
