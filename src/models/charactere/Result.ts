import { Origin } from './Origin';
import { Location } from './Location';
export interface Result{
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    localtion: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}