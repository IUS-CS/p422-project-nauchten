import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import {HttpClientModule} from '@angular/common/http';
import { PlannerComponent } from './planner/planner.component';
import {AppRoutingModule} from './app-routing.module';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileContainerComponent,
    PlannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SchedulerModule,
    BrowserAnimationsModule,
    DateInputsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
