import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calisthenics-hero';

 public constructor(private router:Router)
 {

 }

  navigateTo(route:string)
  {
    this.router.navigateByUrl(route);
  }

  returnHome()
  {
    console.log("return home context");
    this.router.navigateByUrl("home");
  }
}
