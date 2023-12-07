import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {ChatComponent} from "./chat/chat.component";
import {MydocComponent} from "./mydoc/mydoc.component";

import {MycalenderComponent} from "./mycalender/mycalender.component";
import {MyfileComponent} from "./myfile/myfile.component";
import {MytimelineComponent} from "./mytimeline/mytimeline.component";
import {MycontactComponent} from "./mycontact/mycontact.component";
import {MytaskComponent} from "./mytask/mytask.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

// import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login', // Redirect to the login component
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'chats',
    component: ChatComponent
  },
  {
    path: 'my-doc',
    component: MydocComponent,
    children: [
      { path: 'timeline', component: MytimelineComponent },
      { path: 'tasks', component: MytaskComponent },
      { path: 'calendars', component: MycalenderComponent },
      { path: 'contacts', component: MycontactComponent},
      { path: '', redirectTo: 'timeline', pathMatch: 'full' }, // Default route to MyTimeline
    ],
  },
  { path: '', redirectTo: '/my-doc/timeline', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
