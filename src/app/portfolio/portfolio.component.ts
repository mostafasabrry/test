import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  isClicked:boolean=false ;
  imglink:string='';
   show(x:string):void{
    this.isClicked=true;
     this.imglink=x;
   }
   hideLayer(event: MouseEvent): void {
    this.isClicked = false;
  }
   
}
