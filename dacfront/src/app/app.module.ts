import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { VolumeFormDialogComponent } from './views/home/volume-form-dialog/volume-form-dialog.component';
import { EventosListComponent } from './views/home/eventos-list/eventos-list.component';
import { ArtigoFormDialogComponent } from './views/home/artigo-form-dialog/artigo-form-dialog.component';
import { AutorFormDialogComponent } from './views/home/autor-form-dialog/autor-form-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { VolumePutFormDialogComponent } from './views/home/volume-put-form-dialog/volume-put-form-dialog.component';
import { ArtigoPutFormDialogComponent } from './views/home/artigo-put-form-dialog/artigo-put-form-dialog.component';
import { AutorPutFormDialogComponent } from './views/home/autor-put-form-dialog/autor-put-form-dialog.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VolumeFormDialogComponent,
    EventosListComponent,
    ArtigoFormDialogComponent,
    AutorFormDialogComponent,
    VolumePutFormDialogComponent,
    ArtigoPutFormDialogComponent,
    AutorPutFormDialogComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDialogModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
