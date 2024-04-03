import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MissionlistComponent} from './missionlist/missionlist.component'
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MissionlistComponent,MissiondetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SpaceX Mission Launch List';
}
