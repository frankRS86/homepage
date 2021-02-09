import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { Path } from '../services/Path';

@Component({
  selector: 'app-path-screen',
  templateUrl: './paths-overview-screen.component.html',
  styleUrls: ['./paths-overview-screen.component.scss']
})


export class PathScreenComponent implements OnInit {

  paths:Path[] = []; 

  constructor(private router:Router, private http: BackendService) { }

  ngOnInit(): void {

    console.log("requesting paths...")
    this.http.requestApi("paths").subscribe(response =>
      {
        this.paths = response;
        for(var path of this.paths)
        {
           this.http.requestImage(path.imageID).subscribe(
             data => this.http.createImageFromBlob(data,path)
           );
        }

      })
  }

  selectPath(value:String)
  {
    this.router.navigateByUrl('path');
  }

}
