import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageNotesComponent } from './affichage-notes.component';

describe('AffichageNotesComponent', () => {
  let component: AffichageNotesComponent;
  let fixture: ComponentFixture<AffichageNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
