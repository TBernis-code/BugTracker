import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormtestComponent } from './formtest/formtest.component';
import { BugComponent } from './bug/bug.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  { path: 'bug-form', component: FormtestComponent },
  { path: 'bug-list', component: BugComponent },
  { path: 'home', component: NavBarComponent },
  { path: 'modif', component: NameEditorComponent },
  { path: 'hello-world', component: HelloWorldComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
