import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  httpHeaders: any = {
    headers: {
      'Authorization' : 'Bearer ' + API.apiKey
    }
  }

  constructor(public http: HttpClient) { }

  public getTeamsApi(): Observable<any> {
    return this.http.get( API.baseUrl + '/teams', this.httpHeaders);
  }
}
