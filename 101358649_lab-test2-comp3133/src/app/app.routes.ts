import { Routes } from '@angular/router';
import {NgModule} from '@angular/core'
import { MissionlistComponent } from './missionlist/missionlist.component';

import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
export const routes: Routes = [
    {path:'', redirectTo:'missions', pathMatch:'full'},
    {path:'missions', component: MissionlistComponent},
    {path:'mission-details/:id',component:MissiondetailsComponent}
];
