// This is a service


import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Event {
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

  public getEvent(name: string): Observable<Event> {
    return this.http.get<Event>(`${this.url}/${name}`);
  }

  public getPlannerEvents(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
}
