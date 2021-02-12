import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-exercise-screen',
  templateUrl: './exercise-screen.component.html',
  styleUrls: ['./exercise-screen.component.scss']
})
export class ExerciseScreenComponent implements OnInit {

  exercises:any[] = []
  indexLetter:string = "";

  constructor(private http: BackendService,private router:Router) { }

  ngOnInit(): void {

    console.log("requesting exercises...")
    this.http.requestApi("exercises").subscribe(response =>
      {
        this.exercises = response;
        for(var path of this.exercises)
        {
          // this.http.requestImage(path.imageID).subscribe(
            console.log("ex:"+path);
          //   data => this.http.createImageFromBlob(data,path)
          // );
        }

      })
  }

  search(value:string)
  {

  }

  showExercise(id:string)
  {
    this.router.navigateByUrl("exercise");
  }

  showIndexLetter(index:number):boolean
  {
   var newChar = this.exercises[index].name.charAt(0);
   if(newChar != this.indexLetter)
   {
     this.indexLetter = newChar.toUpperCase();
     return true;
   }

    return false;
  }

}
