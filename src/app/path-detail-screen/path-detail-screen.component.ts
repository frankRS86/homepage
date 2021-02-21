import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { Exercise, ImageItem } from '../services/Exercise';

@Component({
  selector: 'app-path-detail-screen',
  templateUrl: './path-detail-screen.component.html',
  styleUrls: ['./path-detail-screen.component.scss']
})
export class PathDetailScreenComponent implements OnInit,AfterViewInit {

  pathId:string ="";
  exercises:Exercise[];

  constructor(private router:Router,private route:ActivatedRoute, private service:BackendService) {
    this.exercises = [];
  
  }
  async ngAfterViewInit() {
    
    var id = this.route.snapshot.paramMap.get('id');
    this.pathId = id || "unknown";
    this.service.requestApi("paths/"+id).subscribe(async data =>
      {
        console.log(data);

        for(var item of data)
        { 
           var exItem = await this.service.requestApi("exercises/"+item).toPromise();
            
              var ex = new Exercise(exItem.id,exItem.descriptions,exItem.name,exItem.imageIDs,exItem.stage,exItem.type)
              this.exercises.push(ex);
              // if(ex.images.length === 0)
              // {
              //   return;
              // }
              // var img = ex.images[0];
              // this.createImageFromBlob(img);
            
        }

      });
  }

  createImageFromBlob(img:ImageItem)
  {
      this.service.requestImage(img.imageID).subscribe(
      imgData => this.service.createImageFromBlob(imgData,img));
  }

  ngOnInit(): void {
  }

  backToOverview()
  {
    this.router.navigateByUrl('paths');
  }

  selectPath(value:string)
  {

  }

  range(i:number)
  {
    return new Array(i);
  }

  getColor(index:number):string
  {
     var stage = this.exercises[index].stage;

     switch(stage)
     {
      case 1:
        return "lightgreen";
        case 2:
          return "green";
          case 3:
            return "yellow";
            case 4:
              return "orange";
              case 5:
                return "lightred";
                case 6:
                  return "red";
                  case 7:
                    return "pink";

     }

     return "gray";
  }
}
