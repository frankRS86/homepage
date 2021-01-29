import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calisthenics-hero';

  redirect_en = environment.en_redirect;
  redirect_de = environment.de_redirect;

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
