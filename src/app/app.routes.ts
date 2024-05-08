import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyFormComponent } from './components/my-form/my-form.component';

export const routes: Routes = [
    {path: "", component: MyFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }