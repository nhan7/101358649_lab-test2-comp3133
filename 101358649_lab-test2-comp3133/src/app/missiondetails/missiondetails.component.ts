import { Component, Input } from '@angular/core';
import {Mission} from '../models/mission'
import { CommonModule, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent {
  title = "SpaceX Mission Details"
  @Input() selectedMission: Mission | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute, private location: Location){

  }

  goBack():void{
    this.location.back();
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe(params =>{
      const flightNumber = params.get('id')
      if(flightNumber){
        this.fetchMissionDetails(flightNumber)
      }

    })
  }

  fetchMissionDetails(flightNumber:string):void{
    this.http.get<Mission>(`https://api.spacexdata.com/v3/launches/${flightNumber}`).subscribe(data=>{
      this.selectedMission = data;
    })
  }
  

}
