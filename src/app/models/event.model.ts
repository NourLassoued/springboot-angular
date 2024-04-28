import { Participation } from "./participation.model";

export class Event{
    id!:number;
    titre!:string;
    description!:string;
    eventDate!:Date;
    duration!:number;
    maxParticiaption!:number;
    image!:string;
    longitude!:number;
    latitude!:number;
    participations!: Participation[];

   decreaseMaxParticipation(): void {
        this.maxParticiaption--; // Diminuer maxParticipation de 1
    }
}

