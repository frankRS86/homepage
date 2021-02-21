export class Exercise
{
    constructor(id:string,descriptions:string[],name:string, imageID:string[],stage:number,type:string)
    {
        this.id = id;
        this.type = type;
        this.name = name;
        this.descriptions = descriptions;
        this.stage = stage;
        this.images = [];
        var c = 0;

        if(imageID === undefined || imageID.length == 0)
        {
            return;
        }

        for(var img of imageID)
        {
            this.images.push(
                new ImageItem(img,c++)
                );
        }
    }
    
     public id:string;
     public type:string;
     public stage:number;
     public descriptions:string[];
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