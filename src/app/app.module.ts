import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { AffichageNotesComponent } from './affichage-notes/affichage-notes.component';
import { AjouterNoteComponent } from './ajouter-note/ajouter-note.component';
import { ModifierNoteComponent } from './modifier-note/modifier-note.component';
import { SupprimerNoteComponent } from './supprimer-note/supprimer-note.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    AffichageNotesComponent,
    AjouterNoteComponent,
    ModifierNoteComponent,
    SupprimerNoteComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
