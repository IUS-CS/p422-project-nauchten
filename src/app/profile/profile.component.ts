import { Component, OnInit, Input} from '@angular/core';
import { Profile } from './DataTypes';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() profile: Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
