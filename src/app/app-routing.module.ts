import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntidadAdminComponent } from '@component/entidad-admin/entidad-admin/entidad-admin.component';
import { SistemaAdminComponent } from '@component/sistema-admin/sistema-admin/sistema-admin.component';

const routes: Routes = [
  { path: 'entidad-admin', component: EntidadAdminComponent, pathMatch: 'full' },
  { path: 'sistema-admin', component: SistemaAdminComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
