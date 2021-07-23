import { Origin } from './Origin';
import { Location } from './Location';
export class Result{
    id: number=0;
    name: string="";
    status: string="";
    species: string="";
    type: string="";
    gender: string="";
    origin: Origin= new Origin();
    location: Location= new Location();
    image: string="";
    episode: string[]=[];
    url: string="";
    created: Date=new Date();
}