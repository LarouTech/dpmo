import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RisksComponent } from './risks/risks.component';
import { IssuesComponent } from './issues/issues.component';
import { DecisionsComponent } from './decisions/decisions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SlideInService } from './slide-in.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RisksComponent,
    IssuesComponent,
    DecisionsComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
