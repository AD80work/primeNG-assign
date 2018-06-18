import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../../domain/event';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>('assets/data/events.json')
      .toPromise()
      .then(res => <Event[]>res.data)
      .then(data => { return data; });
    }

}
