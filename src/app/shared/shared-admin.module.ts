/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';

/* ---------- Modules ---------- */
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

/* ---------- Pipes ---------- */
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@NgModule({
  imports: [
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    FormsModule,
    NgxPaginationModule,
    FilterPipe
  ],
  declarations: [FilterPipe],
})

export class SharedAdminModule { }