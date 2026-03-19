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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashComponent,
    FromeventComponent,
    FormComponent,
    HoverDirective,
    EnumComponent,
    FlipcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
