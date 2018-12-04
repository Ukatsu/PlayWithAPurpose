import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { ESportsComponent } from '../e-sports/e-sports.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'eSports', component: ESportsComponent},
  // { path: 'media', component: MediaComponent }
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
