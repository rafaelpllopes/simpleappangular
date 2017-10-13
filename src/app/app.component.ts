import { Component } from '@angular/core';
import { Address, Company, Geo, User } from './models/User';
import { Users } from './models/Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleHeader = 'Simple App Angular'; 
}
