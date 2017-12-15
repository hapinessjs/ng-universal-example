import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _user: any;

  constructor(private _httpService: HttpService) {
    this._user = { name: {} };
  }

  ngOnInit() {
    this._httpService.getRandomUser().subscribe(_ => this._user = _);
  }

  get user(): any {
    return this._user;
  }
}
