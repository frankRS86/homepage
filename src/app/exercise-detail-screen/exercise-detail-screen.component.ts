import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { Exercise, ImageItem } from '../services/Exercise';

@Component({
  selector: 'app-exercise-detail-screen',
  templateUrl: './exercise-detail-screen.component.html',
  styleUrls: ['./exercise-detail-screen.component.scss']
})
export class ExerciseDetailScreenComponent implements OnInit {

  public exercise:Exercise;

  constructor(private router:Router,private route: ActivatedRoute,private service:BackendService) 
  {
    this.exercise = {} as Exercise;

    var id = this.route.snapshot.paramMap.get('id');
    this.service.requestApi("exercises/"+id).subscribe(data =>
      {
        this.exercise = new Exercise(data.id,data.description,data.name,data.imageIDs)
        console.log(this.exercise);
        if(this.exercise.images === undefined)
        {
          return;
        }

        for(var img of this.exercise.images)
        { 
          this.createImageFromBlob(img);
        }

      });
  }

  createImageFromBlob(img: ImageItem)
  {
    this.service.requestImage(img.imageID).subscribe(
      data => this.service.createImageFromBlob(data,img)
    );
  }

  ngOnInit(): void {
  }
  
  backToOverview()
  {
    this.router.navigateByUrl('exercises');
  }
}
