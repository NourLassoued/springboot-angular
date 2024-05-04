import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participation } from '../models/participation.model';
import { Observable, catchError, throwError } from 'rxjs';
import { Event } from 'src/app/models/event.model';
import { map } from 'rxjs/operators'; 
import * as QRCode from 'qrcode';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  private apiUrl='http://localhost:8070/participation';

  constructor(private http:HttpClient) { }
  
  createParticipation(participation:Participation,idUser:number,idEvent:number):Observable<Participation> {
    return this.http.post<Participation>(`${this.apiUrl}/${idUser}/${idEvent}`,participation);
  }
  
  
  deleteParticipation(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getAllParticipations():Observable<Participation[]>{
    return this.http.get<Participation[]>(this.apiUrl);
  }
  getParticipationById(id:number):Observable<Participation>{
    return this.http.get<Participation>(`${this.apiUrl}/${id}`);
  }
  getParticipationByEvent(idEvent:number):Observable<Participation[]>{
    return this.http.get<Participation[]>(`${this.apiUrl}/event/${idEvent}`);
  }
  /*
  getParticipationsByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`);
  }*/
  
  updateParticipation(participation: Participation): Observable<Participation> {
    return this.http.put<Participation>(`${this.apiUrl}/update`, participation);
  }
  getParticipationByUser(idUser:number):Observable<Participation[]>{
    return this.http.get<Participation[]>(`${this.apiUrl}/user/${idUser}`);
  }
  /*
  getParticipationsByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`);
  }
*/
getParticipationsByUser(idUser: number): Observable<Participation[]> {
  
  return this.http.get<Participation[]>(`${this.apiUrl}/user/${idUser}/participations`);
} 
}