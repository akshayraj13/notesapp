import {NgModule} from '@angular/core';

import {SidenavComponent} from './sidenav.component';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  exports: [
    SidenavComponent
  ],
  bootstrap: []
})
export class SidenavModule {

}
