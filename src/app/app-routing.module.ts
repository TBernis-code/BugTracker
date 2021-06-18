import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormtestComponent } from './formtest/formtest.component';
import { BugComponent } from './bug/bug.component';

const routes: Routes = [
  { path: 'bug-form', component: FormtestComponent },
  { path: 'bug-list', component: BugComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
