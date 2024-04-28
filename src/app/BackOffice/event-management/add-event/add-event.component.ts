import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit{
  addEventForm!:FormGroup;
  selectedFile!:File;
  constructor(
    private fb:FormBuilder,
    private eventService:EventService,
    private router:Router,
    private fileService:FileService
  ){

  }
  ngOnInit(): void {
    this.addEventForm=this.fb.group({
      titre:['',Validators.required],
      description:['',Validators.required],
      eventDate:['',Validators.required],
      duration:['',[Validators.required,Validators.min(1)]],
      maxParticiaption:['',[Validators.required,Validators.min(1)]],
      longitude:['',Validators.required],
      latitude:['',Validators.required],
      image:[''],
    })
  
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }
  onSubmit(): void {
    if (this.addEventForm.valid) {
      if (this.selectedFile) {
        this.fileService.uploadFile(this.selectedFile).subscribe(response => {
          const filename = response.split(': ')[1];
          console.log(filename); 
  
          this.addEventForm.patchValue({ image: filename });
          this.createEvent(filename);
        });
      } else {
        this.createEvent(null);
      }
    }
  }
  createEvent(imageFilename: string | null): void{
    const eventData = {
      ...this.addEventForm.value,
      image: imageFilename
  };
    this.eventService.createEvent(eventData).subscribe({
      next:()=>{
        console.log('Event added to day successfully');
        this.router.navigate(['/Admin/ManageEvent']);
      },
      error: (error) => {
          console.error('There was an error adding the event ', error);
      }
  });
}
}
