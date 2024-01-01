import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminContentComponent} from "./components/admin-content/admin-content.component";

export const routes: Routes = [
  { path: 'content', component: AdminContentComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
