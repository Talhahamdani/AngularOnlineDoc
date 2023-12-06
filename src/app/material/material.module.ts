import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatLineModule} from "@angular/material/core";
import {MatDividerModule} from "@angular/material/divider";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatLabel} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSnackBarModule} from "@angular/material/snack-bar";

const MyMaterial=[MatButtonModule,MatToolbarModule,MatIconModule,MatMenuModule,
  MatLineModule,MatDividerModule,MatTabsModule,MatButtonToggleModule,MatSidenavModule,
MatCardModule,MatTooltipModule,MatSnackBarModule];


@NgModule({
  imports: [MyMaterial],
  exports:[MyMaterial]
})
export class MaterialModule {

}
