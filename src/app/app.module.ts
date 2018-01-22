import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Angular material - Animations
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule } from '@angular/forms';

// Angular material - checkbox
import { MatCheckboxModule } from '@angular/material/checkbox';
// Angular material - menu
import { MatMenuModule } from '@angular/material/menu';
// Angular material - toolbar
import { MatToolbarModule } from '@angular/material/toolbar';
// Angular material - button
import { MatButtonModule } from "@angular/material/button";
// Angular material - card
import { MatCardModule } from '@angular/material/card';
// Angular material - icon
import { MatIconModule } from '@angular/material/icon';
// Angular materia - input
import { MatInputModule } from '@angular/material/input';
// import module Http
import { HttpModule } from '@angular/http';

// import profile service
import { ProfileService } from './services/profile.service';


import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
