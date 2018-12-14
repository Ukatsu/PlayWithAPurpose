import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './shared/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ESportsComponent } from './e-sports/e-sports.component';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import { MembershipComponent } from './membership/membership.component';
import { MembershipModule } from './membership/membership.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ScheduleComponent,
    ESportsComponent,
    MembershipComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MembershipModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
