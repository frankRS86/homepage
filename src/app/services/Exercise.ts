export class Exercise
{
    constructor(id:String,description:string,name:string, imageID:string[],stage:number)
    {
        this.name = name;
        this.description = description;
        this.stage = stage;
        this.images = [];
        var c = 0;
        for(var img of imageID)
        {
            this.images.push(
                new ImageItem(img,c++)
                );
        }
    }
    
     public stage:number;
     public description;
     public name:string;
     public images:ImageItem[];
}

export class ImageItem
{
    constructor(imageID:string,id:number)
    {
        this.id = id;
        this.imageID = imageID;
    }
    public id:number;
    public imageID:string;
    public image:any;
}