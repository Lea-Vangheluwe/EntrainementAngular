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
  note: Note = {
    id: 0,
    content: ''
  }

  constructor(private notesService : NotesService) {  }

  addNote(content: string) {
    if (content != '') {
      this.note = {
        id: Date.now(),
        content: content
      };
      this.notesService.addData(this.note).subscribe(addNote => this.notes.push(this.note))
    }
    else {
      window.alert ('Merci d\'ajouter une donnée !')
    }
  };

  deleteNote(idToDelete: number){
    this.notesService.deleteData(idToDelete).subscribe(
      DeleteNote => this.notes = this.notes.filter(currentNote => currentNote.id != idToDelete)
    )
  };

  ngOnInit(): void {
    this.notesService.getData().subscribe(resultsNotes => {
      this.notes = resultsNotes;
    })
  }

}
