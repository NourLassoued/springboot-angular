import { Event } from "./event.model";
import { User } from "./user.model";


export class Participation{
    id!:number;
    user!:User;
    event!: Event;
    registrationDate!:Date;
    injury!:string;
    emergencyNumber!:number;
   

}