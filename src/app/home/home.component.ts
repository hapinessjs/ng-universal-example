import { Component, Inject, OnInit } from '@angular/core';
import { ServerRequestService } from '../shared/services/server-request.service';
import { REQUEST_SERVICE } from '../shared/services/tokens';
import { ClientRequestService } from '../shared/services/client-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(REQUEST_SERVICE) private _requestService: ServerRequestService | ClientRequestService) { }

  ngOnInit() {
    this._requestService.log();
  }
}
