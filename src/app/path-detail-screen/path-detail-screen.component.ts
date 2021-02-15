import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { Exercise, ImageItem } from '../services/Exercise';

@Component({
  selector: 'app-path-detail-screen',
  templateUrl: './path-detail-screen.component.html',
  styleUrls: ['./path-detail-screen.component.scss']
})
export class PathDetailScreenComponent implements OnInit {

  exercises:Exercise[];

  constructor(private router:Router,private route:ActivatedRoute, private service:BackendService) {
    this.exercises = [];
    var id = this.route.snapshot.paramMap.get('id');
    this.service.requestApi("paths/"+id).subscribe(data =>
      {
        console.log(data);

        for(var item of data)
        { 
            var ex = new Exercise(item.id,item.description,item.name,item.imageIDs,item.stage)
            this.exercises.push(ex);

            if(ex.images.length === 0)
            {
              continue;
            }
            var img = ex.images[0];
            this.createImageFromBlob(img);
     
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
