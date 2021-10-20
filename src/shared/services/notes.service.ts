import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

notes: Note[] = [];

  getData(): Observable<Note[]> {
      return this.httpClient.get<Note[]>(`${environment.serverUrl}/notes/`)
    }

 //Suppression d'une note
  deleteData(idToDelete: number){
    let url = `${environment.serverUrl}/notes/${idToDelete}`;
    return this.httpClient.delete(url, this.httpOptions)
  }

  addData(note: Note): Observable<Note> {
      return this.httpClient.post<Note>(`${environment.serverUrl}/notes/`, note, this.httpOptions)
  }

  editNote(note: Note){
    return this.httpClient.put<Note>(`${environment.serverUrl}/notes/${note.id}`, note, this.httpOptions)
  }

  constructor(private httpClient: HttpClient) { }
}
