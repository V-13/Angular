import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import  {HttpClientModule}from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactUSComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ NavbarComponent,ContactUSComponent,AppComponent]
})
export class AppModule { }
