
import {Component, OnInit} from '@angular/core';
import {Course, SyllabusDataService} from '../syllabus-data.service';
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
  selectedEvent: Observable<Course>;

  constructor(
  private OurPlannerDataService: OurPlannerDataService,
  private router: Router,
  private route: ActivatedRoute,
  private location: Location
) { }
  ngOnInit(): void {
    this.selectedCourse = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Course> => {
        return this.OurPlannerDataService.getCouse(params.get('class'));
      })
    );
  }

  public selectCourse(name: string): void {
    this.selectedCourse = this.OurPlannerDataService.getCouse(name);
    if (!this.selectedCourse) {
      this.router.navigateByUrl('/notfound');
    }
  }

  public goBack(): void {
    this.location.back();
  }
}

