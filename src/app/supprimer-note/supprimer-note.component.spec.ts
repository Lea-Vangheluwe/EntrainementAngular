import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerNoteComponent } from './supprimer-note.component';

describe('SupprimerNoteComponent', () => {
  let component: SupprimerNoteComponent;
  let fixture: ComponentFixture<SupprimerNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
