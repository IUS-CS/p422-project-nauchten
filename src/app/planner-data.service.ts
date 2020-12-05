// This is a service


import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Course {
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

  public getCouse(name: string): Observable<Course> {
    return this.http.get<Course>(`${this.url}/${name}`);
  }

  public getPlannerEvents(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
}





