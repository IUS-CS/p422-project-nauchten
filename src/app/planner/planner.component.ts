
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
  selectedCourseName: string;
  selectedCourse: Observable<Event>;

  constructor(
  private syllabusDataService: PlannerDataService,
  private router: Router,
  private route: ActivatedRoute,
  private location: Location
) { }
  ngOnInit(): void {
    this.selectedCourse = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Event> => {
        return this.syllabusDataService.getEvent(params.get('event'));
      })
    );
  }}

