import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// pages

import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { FeaturesComponent } from './pages/features.component';

// components

import { HeaderComponent } from './components/header.component';
import { TabComponent } from './components/tab.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
    {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
]


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HeaderComponent, TabComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
