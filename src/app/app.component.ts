import { Component } from '@angular/core';
import { ServersComponent } from './servers/servers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ServersComponent] // <-- Add this line
})
export class AppComponent {
  title = 'RBD Angular 7 or 2 code learning';
}
