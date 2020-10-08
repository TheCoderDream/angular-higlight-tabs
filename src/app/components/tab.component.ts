import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
   <div 
    (mousemove)="moveHiglight($event)"
    (mouseleave)="hideHiglight($event)"
    class="tab">
      <div [ngStyle]="highlightStyle" class="highlight"></div>
      <ng-content></ng-content>
   </div>
  `
})
export class TabComponent {
  highlightStyle = {
    left: 0,
    opacity: 0
  }


  moveHiglight(e): void {
    console.log(e.layerX)
    this.highlightStyle ={
      left: e.layerX - 150,
      opacity: 1
    };
  }

  hideHiglight(e): void {
    this.highlightStyle ={
      left: e.layerX - 150,
      opacity: 0
    };
  }
}