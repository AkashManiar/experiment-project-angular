import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DogsListComponent} from "./standalone-components/dogs-list/dogs-list.component";
import {CustomPreloadingStrategy} from "./services/custom-preloading-strategy.service";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: DogsListComponent },
  { path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module')
      .then((module) => module.AdminModule),
    data: { preload: true, delay: 5000 }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy
  })],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
