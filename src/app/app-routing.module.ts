import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemaAdminComponent } from '@component/sistema-admin/sistema-admin/sistema-admin.component';

const routes: Routes = [
  { path: 'sistema-admin', component: SistemaAdminComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
