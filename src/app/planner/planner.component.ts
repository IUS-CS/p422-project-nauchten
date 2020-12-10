
import {Component, OnInit} from '@angular/core';
import {Course, SyllabusDataService} from '../planner-data.service';
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
  selectedCourse: Observable<Course>;

  constructor(
  private syllabusDataService: SyllabusDataService,
  private router: Router,
  private route: ActivatedRoute,
  private location: Location
) { }
  ngOnInit(): void {
    this.selectedCourse = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Course> => {
        return this.syllabusDataService.getCouse(params.get('event'));
      })
    );
  }}

