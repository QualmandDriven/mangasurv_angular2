import { Component, OnInit } from '@angular/core';

import { Auth } from "../auth.service";
import { MomentModule } from "angular2-moment/moment.module";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = "Profile"

  constructor(public auth: Auth) { }

  ngOnInit() {
  }

}
