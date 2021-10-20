import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/interfaces/noteInterface';
import { NotesService } from '../shared/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(private notesService : NotesService) {  }

  ngOnInit(): void {
    this.notesService.getData().subscribe(resultsNotes => {
      this.notes = resultsNotes;
    })
  }

}
