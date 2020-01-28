import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RisksComponent } from './risks/risks.component';
import { IssuesComponent } from './issues/issues.component';
import { DecisionsComponent } from './decisions/decisions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreateRiskComponent } from './risks/create-risk/create-risk.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RisksComponent,
    IssuesComponent,
    DecisionsComponent,
    DashboardComponent,
    HomeComponent,
    CreateRiskComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
