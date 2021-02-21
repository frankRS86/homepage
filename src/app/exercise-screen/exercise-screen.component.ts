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
  exercises_all:any[] = []
  exercises_pull:any[] = []
  exercises_push:any[] = []
  exercises_legs:any[] = []
  indexLetter:string = "";
  selectedFilter:number = -1;

  constructor(private http: BackendService,private router:Router) { }

  ngOnInit(): void {

    console.log("requesting exercises...")
    this.http.requestApi("exercises").subscribe(response =>
      {
        this.exercises_all = response;
        for(var item of this.exercises_all)
        {
          // this.http.requestImage(path.imageID).subscribe(
            console.log("ex:"+JSON.stringify(item));
            if(item.type === "PULL")
            {
              this.exercises_pull.push(item);
            }
            if(item.type === "PUSH")
            {
              this.exercises_push.push(item);
            }
            if(item.type === "LEGS")
            {
              this.exercises_legs.push(item);
            }
          //   data => this.http.createImageFromBlob(data,path)
          // );
        }
        
        this.exercises = this.exercises_all;
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
   if(newChar.toLowerCase() !== this.indexLetter.toLowerCase())
   {
     this.indexLetter = newChar.toUpperCase();
     return true;
   }

    return false;
  }

  getIndexLetter():string
  {
    return this.indexLetter;
  }

  selectFilter(filter:number)
  {
    this.indexLetter = "";
    if(filter === this.selectedFilter)
    {
      this.exercises = this.exercises_all;
      this.selectedFilter = -1;
      return;
    }

    this.selectedFilter = filter;

    if(this.selectedFilter === 1)
    {
      this.exercises = this.exercises_push;
    }
    if(this.selectedFilter === 2)
    {
      this.exercises = this.exercises_pull;
    }
    if(this.selectedFilter === 3)
    {
      this.exercises = this.exercises_legs;
    }
  }

}
