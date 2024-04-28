import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participation-management',
  templateUrl: './participation-management.component.html',
  styleUrls: ['./participation-management.component.css']
})
export class ParticipationManagementComponent implements OnInit{
  event: Event[] = [];


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
