import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';
import { Observable } from 'rxjs';
import { Participation } from '../models/participation.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl='http://localhost:8082/event';
  private events: Event[] = []
  constructor(private http:HttpClient) { }
  createEvent(event:Event):Observable<Event>{
      return this.http.post<Event>(this.apiUrl,event);
  }
  deleteEvent(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getAllEvents():Observable<Event[]>{
    return this.http.get<Event[]>(this.apiUrl);
  }
  
  getEventById(id:number):Observable<Event>{
    return this.http.get<Event>(`${this.apiUrl}/${id}`);
  }
  

  
  updatEvent(event:Event):Observable<Event>{
    return this.http.put<Event>(`${this.apiUrl}/updatEvent`,event);
  } 
  updateMaxParticipation(eventId: number, newMaxParticipation: number): Observable<Event> {
    const url = `${this.apiUrl}/${eventId}/maxParticipation?newMaxParticipation=${newMaxParticipation}`;
    return this.http.put<Event>(url, {});
  }
  getEventByTitre(titre: string): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/titre/${titre}`);
  }

}



