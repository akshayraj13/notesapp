import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Note} from '../models/note.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent {
  @Input() notes: Note[];
  @Output() selectedNote = new EventEmitter<Note>();
  public selectNote(note: Note){
    this.selectedNote.emit(note);
  }

}
