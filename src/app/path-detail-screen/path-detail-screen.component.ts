import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-path-detail-screen',
  templateUrl: './path-detail-screen.component.html',
  styleUrls: ['./path-detail-screen.component.scss']
})
export class PathDetailScreenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  backToOverview()
  {
    this.router.navigateByUrl('paths');
  }

  selectPath(value:string)
  {

  }
}
