/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';

/* ---------- Modules ---------- */
import { Routes, RouterModule } from '@angular/router';

/* ---------- Components ---------- */
import { BaseComponent } from './components/layout/base/base.component';
import { ErrorsComponent } from './components/errors/errors.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'details',
        loadChildren: () => import('./components/pages/details/details.module').then(m => m.DetailsModule)
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
      {
        path: 'error',
        component: ErrorsComponent
      },
      {
        path: 'error/:type',
        component: ErrorsComponent
      },
      { path: '**', redirectTo: 'error', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
