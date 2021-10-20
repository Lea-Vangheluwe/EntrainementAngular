import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ajouter-note',
  templateUrl: './ajouter-note.component.html',
  styleUrls: ['./ajouter-note.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AjouterNoteComponent implements OnInit {
  @Output() addDataEvent = new EventEmitter<string>();
  ajoutNoteForm = new FormGroup({
    content: new FormControl('')
  });
  placeHolder: string = 'Ajoutez votre donnée ici'

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  addData(){
    this.addDataEvent.emit(this.ajoutNoteForm.value.content);
    this.ajoutNoteForm.patchValue({content: ''})
  }

  open(content: any) {
    this.modalService.open(content);
  }

}
