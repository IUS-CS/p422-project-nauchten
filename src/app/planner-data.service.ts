// This is a service


import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Planner {
  CurrentDate: string;
  title: string;
  description: string;
  motivationToCompleteEvent: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SyllabusDataService {
  constructor(
    private http: HttpClient
  ) {
  }

  private url = '/v1/classes';

  public getPlanner(name: string): Observable<Planner> {
    return this.http.get<Planner>(`${this.url}/${name}`);
  }

  public getPlannerEvents(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
}
