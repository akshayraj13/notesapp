import {Component, Input} from '@angular/core';
import {Note} from '../models/note.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  @Input() note: Note;
}
