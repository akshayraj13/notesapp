import {NgModule} from '@angular/core';

import {EditorComponent} from './editor.component';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    MatListModule,
    MatInputModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [
    EditorComponent
  ],
  bootstrap: []
})
export class EditorModule {

}
