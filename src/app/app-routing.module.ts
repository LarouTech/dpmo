import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RisksComponent } from './risk/risk.component';
import { IssuesComponent } from './issues/issues.component';
import { DecisionsComponent } from './decisions/decisions.component';
import { HomeComponent } from './home/home.component';
import { CreateRiskComponent } from './risk/create-risk/create-risk.component';


const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'risk', component: RisksComponent, children: [
    { path: '', component: CreateRiskComponent },
  ] },
  { path: 'issues', component: IssuesComponent },
  { path: 'decisons', component: DecisionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
