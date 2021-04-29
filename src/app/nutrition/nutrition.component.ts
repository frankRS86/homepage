import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {

 public weight:string = "";
 public height:string = "";
 public age:string = "";

 public activity:string="0";
 public sex:string="male";
 public surplus:number=300;
 public protein:number = 0;

 public result:number = 0;
  public perProtein: number = 0;
  public perCarbs:number = 50;
  public carbs:number = 0;
  public fats:number = 0;
  public perFats:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  calculate()
  {
    var w = Number.parseInt(this.weight);
    var h = Number.parseInt(this.height);
    var a = Number.parseInt(this.age);
    var r = (10*w) + (6.25*h) - (5*a);

    if(isNaN(w))
    {
      this.weight = "please enter a valid number";
      this.result = -1;
      return;
    }

    if(isNaN(h))
    {
      this.height = "please enter a valid number";
      this.result = -1;
      return;
    }

    if(isNaN(a))
    {
      this.age = "please enter a valid number";
      this.result = -1;
      return;
    }

    console.log("h: "+h);
    console.log("r: "+r);

    var facor = 1.2;
    switch(this.activity)
    {
      case "0":
        facor = 1.2;
        break;
        case "1":
          facor = 1.37;
          break;
          case "2":
            facor = 1.5;
            break;
            case "3":
              facor = 1.7;
              break;
              case "4":
                facor = 1.9;
                break;

    }


    if(this.sex === "male")
    {
      r+=5;
    }
    else
    {
      r-=161;
    }

    this.result = Math.round(r * facor);

    this.protein = w*2;
    this.calcMacros();
  }

  plus()
  {
    this.surplus+=50;
    this.calcMacros();
  }

  minus()
  {
    this.surplus-=50;
    this.calcMacros();
  }

  plusCarbs()
  {
    this.perCarbs+=5;
    this.calcMacros();
  }

  minusCarbs()
  {
    this.perCarbs-=5;
    this.calcMacros();
  }

  calcMacros()
  {
    var protcal = this.protein * 4;
    this.perProtein = Math.round(protcal / (this.result + this.surplus) * 100);

    this.carbs = Math.round(((this.result + this.surplus) * this.perCarbs / 100)/4 );

    this.fats = Math.round(((this.result + this.surplus)  - (this.carbs * 4) - (this.protein*4))/9);
    this.perFats = 100 - this.perCarbs - this.perProtein;
  }

}
