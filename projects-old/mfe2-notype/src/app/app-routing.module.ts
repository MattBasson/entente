import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownFragmentComponent } from './dropdown/dropdown-fragment/dropdown-fragment.component';

const routes: Routes = [
  { path: '', component: DropdownFragmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
