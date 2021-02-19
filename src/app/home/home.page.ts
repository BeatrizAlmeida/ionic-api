import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../services/team-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public teams = [];

  constructor(public teamService: TeamServiceService) {
  }

  ngOnInit() {
    this.getListTeams();
  }

  public getListTeams(){
    this.teamService.getTeamsApi().subscribe(
      (response) => {
        this.teams = response;
      }
    );
  }

}
