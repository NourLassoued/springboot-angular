import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { FileService } from 'src/app/services/file.service';
import { Event} from 'src/app/models/event.model';
@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit  {
  updateEventForm!: FormGroup;
  selectedFile!: File;
  eventId!: number;
 
  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private fileService: FileService,
    
    private route: ActivatedRoute,
    private router: Router
  ) {}





  ngOnInit(): void {
   
      this.eventId = Number(this.route.snapshot.paramMap.get('id'));
      this.initializeForm();
      this.loadEventData();
      
  }
  initializeForm(): void {
    this.updateEventForm = this.fb.group({
      titre:['',Validators.required],
      description:['',Validators.required],
      eventDate: ['', Validators.required],
      duration:['',[Validators.required,Validators.min(1)]],
      maxParticiaption:['',[Validators.required,Validators.min(1)]],
      longitude:['',Validators.required],
      latitude:['',Validators.required],
      image:[''],
    });
   this.loadEventData();
  }
  
  loadEventData(): void {
    this.eventService.getEventById(this.eventId).subscribe({
      next: (event: Event) => {
        this.updateEventForm.patchValue(event);
      },
      error: (error) => {
        console.error('Error fetching workout data', error);
      }
    });
  }
  onFileSelected(event: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
}


  onSubmit(): void {
    if (this.updateEventForm.valid) {
      // Extracting image filename
      const filename = this.selectedFile ? this.selectedFile.name : null;
  
      // Building the exercise data object
      const updatEvent = {
        ...this.updateEventForm.value,
        id: this.eventId,
        image: filename,
       
      };
      ;
      this.eventService.updatEvent(updatEvent).subscribe({
        next: () => {
          console.log('Event updated successfully');
          this.router.navigate(['/Admin/ManageEvent']);
        },
        error: (error) => {
          console.error('There was an error updating the event ', error);
        }
      });
    }
  }
}

  
  
  

