import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'


import  {MatSidenavModule } from '@angular/material/sidenav';
import  {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
   
     
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
