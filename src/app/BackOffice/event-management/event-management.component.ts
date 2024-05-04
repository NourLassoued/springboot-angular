import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Event} from 'src/app/models/event.model';
import { Exercise } from 'src/app/models/exercise.model';
import { EventService } from 'src/app/services/event.service';
import { FileService } from 'src/app/services/file.service';
import { ParticipationService } from 'src/app/services/participation.service';
import { MatIconModule } from '@angular/material/icon';

import { Event as AppEvent } from '../../models/event.model'; // Importez l'interface Event de votre modèle

// Dans votre composant Angular


@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit{
  dataSource!:MatTableDataSource<Event>;
  displayedColumns: string[] = ['titre', 'description', 'eventDate', 'duration', 'maxParticiaption', 'image', 'longitude', 'latitude','actions'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(
    private eventService: EventService,
    private fileService: FileService,
    private participationService :ParticipationService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadEvent();
  }
 
  loadEvent(): void {
    this.eventService.getAllEvents().subscribe(events => {
      this.dataSource = new MatTableDataSource<AppEvent>(events);
      this.dataSource.paginator = this.paginator;
    });
  }
  
  sortData(column:string,direction:string):void{
    
    this.dataSource.data.sort((a:any,b:any)=>{
      let valueA=a[column];
      let valueB=b[column];
      if(valueA<valueB){
        return direction ==='asc'?-1:1;
      }else if(valueA>valueB){
        return direction ==='asc'?1:-1;
      }
      return 0;
    })
    this.dataSource.data=[...this.dataSource.data];

  }applyFilter(event: any): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (filterValue === '') {
      this.loadEvent();
    } else {
      this.eventService.getAllEvents().subscribe(events => {
        const filteredData: AppEvent[] = events.filter(event => {
          return event.titre.toLowerCase().includes(filterValue) ||
            event.description.toLowerCase().includes(filterValue) ||
            event.eventDate.toLocaleDateString().toLowerCase().includes(filterValue) ||
            event.duration.toString().includes(filterValue) ||
            event.maxParticiaption.toString().includes(filterValue) ||
            event.longitude.toString().includes(filterValue) ||
            event.latitude.toString().includes(filterValue);
        });
        this.dataSource = new MatTableDataSource<AppEvent>(filteredData);
        this.dataSource.paginator = this.paginator;
      });
    }
  }
  
  
      getImageUrl(filename: string): string {
        return `http://localhost:8082/files/get-image/${filename}`;
      }   
      

      createEvent(): void {
    this.router.navigate(['/Admin/AddEvent']);
  }

  updatEvent(id: number): void {
    this.router.navigate(['/Admin/UpdateEvent', id]);
  }

  deleteEvent(id: number): void {
    if(confirm('Are you sure you want to delete this event?')) {
      this.eventService.deleteEvent(id).subscribe(() => {
        console.log('Event deleted successfully');
        this.loadEvent();
      }, error => {
        console.error('There was an error deleting the event:', error);
      });
    }
  }
}

  

