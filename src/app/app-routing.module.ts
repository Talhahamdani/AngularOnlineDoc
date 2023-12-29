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
import {AuthGuard} from "./guards/authguard.guard";
import {AddtodoComponent} from "./addtodo/addtodo.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
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
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'chats',
    component: ChatComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'my-doc',
    component: MydocComponent,
    canActivate:[AuthGuard],
    children: [
      { path: 'timeline', component: MytimelineComponent,children: [
          {
            path: 'addtodo',
            component: AddtodoComponent,
          },

        ],},
      { path: 'tasks', component: MytaskComponent },
      { path: 'calendars', component: MycalenderComponent },
      { path: 'contacts', component: MycontactComponent},
      { path:'files',component:MyfileComponent},
      { path: '', redirectTo: 'timeline', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/my-doc/timeline', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
