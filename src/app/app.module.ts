import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from "./material/material.module";
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
// import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
// import {AngularFirestore} from "@angular/fire/compat/firestore";
// import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
// import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {provideAuth,getAuth} from "@angular/fire/auth";
import {provideFirestore,getFirestore} from "@angular/fire/firestore";
import {initializeApp} from "@angular/fire/app";
import {environment} from "./enironment";

// import {Auth} from "@angular/fire/auth";
// import {RegisterService} from "./register.service";
import {provideFirebaseApp} from "@angular/fire/app";
import { HotToastModule } from '@ngneat/hot-toast';
import { AddtodoComponent } from './addtodo/addtodo.component';
// import firebase from "firebase/compat";
// import initializeApp = firebase.initializeApp;
// import {getStorage, provideStorage} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/compat/firestore";
// import { ToolbarComponent } from './toolbar/toolbar.component';
import { DeletedialogComponent } from './deletedialog/deletedialog.component';
import {ScrollingModule} from "@angular/cdk/scrolling";
import { ProfileinformationComponent } from './profileinformation/profileinformation.component';


@NgModule({
  bootstrap: [AppComponent],
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
    CardsComponent,
    RegisterComponent,
    LoginComponent,
    LayoutComponent,
    AddtodoComponent,
    // ToolbarComponent,
    DeletedialogComponent,
    ProfileinformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ScrollingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    provideAuth(()=> getAuth()),
    HotToastModule.forRoot(),
    // provideFirestore(()=>getFirestore()),
    // provideStorage(()=>getStorage()),
    // AngularFireAuthModule
   AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
})
export class AppModule { }
