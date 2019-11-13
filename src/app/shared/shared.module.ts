import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DebounceInputDirective } from './debounce-input.directive';

@NgModule({
  declarations: [
    DebounceInputDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    DebounceInputDirective
  ]
})
export class SharedModule { }
