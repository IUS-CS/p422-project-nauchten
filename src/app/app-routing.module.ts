import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlannerComponent } from './planner/planner.component';
import {HeaderComponent} from './header/header.component';

// import {AssignmentsComponent} from './assignments/assignments.component';
// import {AssignmentDetailComponent} from './assignment-detail/assignment-detail.component';
// import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
// import {CatalogComponent} from './catalog/catalog.component';

const routes: Routes = [
  // { path: 'catalog', component: CatalogComponent },
  { path: 'planner/:event', component: PlannerComponent }, // route to get the calendar event and its backend data
  { path: '', component: HeaderComponent }
 // { path: 'assignments', component: AssignmentsComponent },
 // { path: 'assignments/:class/:name', component: AssignmentDetailComponent },
 // { path: '', redirectTo: '/catalog', pathMatch: 'full' },
 // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
