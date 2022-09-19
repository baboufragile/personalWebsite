import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CurriculumVitaeComponent} from './curriculum-vitae/curriculum-vitae.component';

const routes: Routes = [
  { path: 'CurriculumVitae', component: CurriculumVitaeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
