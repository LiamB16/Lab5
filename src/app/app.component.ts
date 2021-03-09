import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  NunberOfTimes:number = 0;
  hidden = false;
  count(){
    this.NunberOfTimes++;
  }
  show()
  {
  
      if(this.hidden == true)
      {
      this.hidden = false;
      }
      else{
      this.hidden = true;
      }
  }
  presidents: any[] =
[{name: "Higgins", term:"2011-"},
{name: "McAleese", term:"1997-2011"},
{name: "Robinson", term:"1990-1997"},
{name: "Hillery", term:"1976-1990"},
{name: "O Dalaigh", term:"1974-1976"}];
}
