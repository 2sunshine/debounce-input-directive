import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: 'form', component: UserFormComponent },
  { path: '**', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
