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
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule, MatDialogRef,MatDialog} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";

const MyMaterial=[MatButtonModule,MatToolbarModule,MatIconModule,MatMenuModule,
  MatLineModule,MatDividerModule,MatTabsModule,MatButtonToggleModule,MatSidenavModule,
MatCardModule,MatTooltipModule,MatSnackBarModule,MatFormFieldModule,MatInputModule,
MatDialogModule,MatCheckboxModule,MatChipsModule,MatIconModule];


@NgModule({
  imports: [MyMaterial],
  exports:[MyMaterial]
})
export class MaterialModule {

}
