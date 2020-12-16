
import {Component, OnInit} from '@angular/core';
import {Event, PlannerDataService} from '../planner-data.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Location} from '@angular/common';


@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {
  selectedEventName: string;
  selectedEvent: Observable<Event>;

  constructor(
  private plannerDataService: PlannerDataService,
  private router: Router,
  private route: ActivatedRoute,
  private LLocation: Location
  ) { }
  ngOnInit(): void {
    this.selectedEvent = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Event> => {
        return this.plannerDataService.getEvent(params.get('event'));
      })
    );
  }
  // This is the back button the client sees. This goes back to the homepage of the personal scheduler.
  public BackButton(): void {
    this.LLocation.back();
  }
}


