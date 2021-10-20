import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../shared/interfaces/noteInterface';

@Component({
  selector: 'app-supprimer-note',
  templateUrl: './supprimer-note.component.html',
  styleUrls: ['./supprimer-note.component.scss']
})
export class SupprimerNoteComponent implements OnInit {
  @Input() note: Note={
    id: 0,
    content: ''
  }
  @Output() deleteDataEvent = new EventEmitter<number>();

  constructor() { }

  deleteNote(idToDelete: number){
    this.deleteDataEvent.emit(idToDelete)
  }

  ngOnInit(): void {
  }

}
