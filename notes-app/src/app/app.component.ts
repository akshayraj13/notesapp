import {Component, OnInit} from '@angular/core';
import {Note} from './models/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  notes: Note[];
  selectedNote: Note;
  searchText: string;
  notesPrototype: Note[];
  ngOnInit(): void {
    this.getNotes();
  }

  private getNotes(){

    if(localStorage.getItem('notes') == null){
      this.notes =  new Array<Note>();
    } else {
      this.notes = JSON.parse(localStorage.getItem('notes'));
      this.notesPrototype = JSON.parse(localStorage.getItem('notes'));
    }
  }
  public addNote() {
    this.selectedNote = new Note();
    this.notes.push(this.selectedNote);
  }

  public saveNotes(){
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  public editNote(note: Note){
    this.selectedNote = note;
  }

  public deleteNote(){
    this.notes.splice(this.notes.indexOf(this.selectedNote),1);
    this.saveNotes();
    this.selectedNote = null;
  }
  public searchNotes(data: string){
    if(data.trim().length > 0){
      this.notes = this.notesPrototype.filter(note => note.title.includes(data) || note.content.includes(data));
    }else{
      this.getNotes();
    }
  }
}
