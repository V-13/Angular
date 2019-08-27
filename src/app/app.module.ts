import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import  {HttpClientModule}from '@angular/common/http';
import { ViewcomponentComponent } from './viewcomponent/viewcomponent.component';
import{ Routes,RouterModule} from '@angular/router';


const appRoutes:Routes=[
  
    {path:'',component:ContactUSComponent},
    {path:'view',component:ViewcomponentComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactUSComponent,
    ViewcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ NavbarComponent,AppComponent]
})
export class AppModule { }
