import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from "./material/material.module";
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChatComponent } from './chat/chat.component';
import { MydocComponent } from './mydoc/mydoc.component';
import { MytimelineComponent } from './mytimeline/mytimeline.component';
import { MycalenderComponent } from './mycalender/mycalender.component';
import { MytaskComponent } from './mytask/mytask.component';
import { MyfileComponent } from './myfile/myfile.component';
import { MycontactComponent } from './mycontact/mycontact.component';
import {HttpClientModule} from "@angular/common/http";
import { CardsComponent } from './cards/cards.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidenavComponent,
    ProfileComponent,
    NotificationsComponent,
    ChatComponent,
    MydocComponent,
    MytimelineComponent,
    MycalenderComponent,
    MytaskComponent,
    MyfileComponent,
    MycontactComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
