import { Component } from '@angular/core';
import { Auth }      from './auth.service';

@Component({
  selector: 'app-root',
  providers: [ Auth ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  './normalize.css',
  'skeleton.css']
})
export class AppComponent {
  constructor(
    public auth: Auth) { }

  title = 'App Component';
}
