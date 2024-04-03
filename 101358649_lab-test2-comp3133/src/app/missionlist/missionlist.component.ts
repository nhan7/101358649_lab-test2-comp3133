import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Mission} from '../models/mission'
import { MissiondetailsComponent } from '../missiondetails/missiondetails.component';
import {Router} from '@angular/router'

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, FormsModule, MissiondetailsComponent],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent {
  title = 'SpaceX Mission Launch List';

  missions: Mission[] = [];
  searchYear : string = "";
  selectedMission: Mission | null = null;

  constructor(private http: HttpClient, private router: Router){

  }

  ngOnInit(): void{
    this.http.get<Mission[]>('https://api.spacexdata.com/v3/launches')
    .subscribe(data =>{
      this.missions = data;
    })
    this.fetchMissions();

  }

  fetchMissions(){
    this.http.get<Mission[]>(`https://api.spacexdata.com/v3/launches?launch_year={{year}}`)
  }

  

  searchMissions(){
    if(this.searchYear.trim() == ''){
      this.fetchMissions()
    }else{
      this.missions=this.missions.filter(mission =>
        mission.launch_year.includes(this.searchYear))
    }
  }

  showMissionDetails(mission:Mission): void{
    this.selectedMission = mission;
    this.router.navigate(['/mission-details', mission.flight_number.toString()])
  }
  
  

}
