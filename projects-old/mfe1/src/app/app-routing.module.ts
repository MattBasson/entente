import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./remote-mfe/remote-mfe.module').then((m) => m.RemoteMfeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
