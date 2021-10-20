import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../shared/interfaces/noteInterface';

@Component({
  selector: 'app-affichage-notes',
  templateUrl: './affichage-notes.component.html',
  styleUrls: ['./affichage-notes.component.scss']
})
export class AffichageNotesComponent implements OnInit {
  @Input() note:Note={
    id:0,
    content: ''
  };

  constructor() {  }

  ngOnInit(): void {

  }

}
