import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile/DataTypes';
import { PROFILE } from '../profile/ScheduleVars';



@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {
  selectedProfile: Profile;
  profiles = PROFILE;
  model = 1;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(profile: Profile): void {
    this.selectedProfile = profile;
  }
}
