import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashComponent } from './dash/dash.component';
import { FromeventComponent } from './rxjs/fromevent/fromevent.component';
import { FormComponent } from './form/form.component';
import { HoverDirective } from './directives/hover.directive';
import { EnumComponent } from './enum/enum.component';
import { FlipcardComponent } from './flipcard/flipcard.component';
import { NavComponent } from './nav/nav.component';
import { UploadComponent } from './file/upload/upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDialogComponent } from './shared/my-dialog/my-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './mat/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './mat/material/material.module';
import { SnackComponent } from './mat/snack/snack.component';
import { DialogComponent } from './mat/dialog/dialog.component';
import { UserFormComponent } from './mat/user-form/user-form.component';
import { FileUploadDialogComponent } from './mat/file-upload-dialog/file-upload-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashComponent,
    FromeventComponent,
    FormComponent,
    HoverDirective,
    EnumComponent,
    FlipcardComponent,
    NavComponent,
    UploadComponent,
    MyDialogComponent,
    TableComponent,
    SnackComponent,
    DialogComponent,
    UserFormComponent,
    FileUploadDialogComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatTableModule,
    MatButtonModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
