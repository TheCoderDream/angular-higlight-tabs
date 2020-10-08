import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
   <div class="tabs">
    <app-tab>
      <a routerLink="/home" routerLinkActive="is-active">Home</a>
    </app-tab>
    <app-tab>
      <a
        routerLink="/features"
        routerLinkActive="is-active"
      >Features</a>
    </app-tab>
    <app-tab>
      <a 
        routerLink="/about"
        routerLinkActive="is-active"
        >About</a>
    </app-tab>
   </div>
  `
})
export class HeaderComponent {

}