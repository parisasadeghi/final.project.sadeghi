import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router'


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { RformComponent } from './rform/rform.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([
    
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'introduction',component:IntroductionComponent},
    { path:'rform',component:RformComponent}





  ])],
 
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, ContactComponent, IntroductionComponent, RformComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
