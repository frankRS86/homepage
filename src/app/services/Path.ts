import { BackendService } from "./backend.service";

export class Path
{
    constructor(name:string, imageID:string,private http:BackendService)
    {
        this.name = name;
        this.imageID = imageID;
    }
    
     public name:string;
     public imageID:string;
     public image:any;
}