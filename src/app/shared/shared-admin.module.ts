/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';

/* ---------- Modules ---------- */
import { FormsModule } from '@angular/forms';

/* ---------- Pipes ---------- */
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@NgModule({
  imports: [
    FormsModule
  ],
  exports: [
    FormsModule,
    FilterPipe
  ],
  declarations: [FilterPipe],
})

export class SharedAdminModule { }