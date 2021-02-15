
export class Path
{
    constructor(id:string,name:string, imageID:string)
    {
        this.name = name;
        this.imageID = imageID;
        this.id = id;
    }
    
     public id:string;
     public name:string;
     public imageID:string;
     public image:any;
}