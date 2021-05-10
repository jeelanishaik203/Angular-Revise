import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {Pipe} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import { CoursesService } from './courses.service';
import {titleCasePipe} from './titleCase.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    titleCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
    
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
