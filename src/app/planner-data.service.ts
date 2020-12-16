// This is a service


import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Event {
  eventName: string;
  CurrentDate: string;
  title: string;
  description: string;
  motivationToCompleteEvent: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PlannerDataService {
  constructor(
    private http: HttpClient
  ) {
  }

  private url = '/v1/events';
// method to get our events from the backend
  public getEvent(name: string): Observable<Event> {
    return this.http.get<Event>(`${this.url}/${name}`);
  }

}
