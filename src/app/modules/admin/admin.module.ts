import {NgModule} from "@angular/core";
import { AdminContentComponent } from './components/admin-content/admin-content.component';
import {DogsListComponent} from "../../standalone-components/dogs-list/dogs-list.component";
import {AdminRoutingModule} from "./admin-routing.module";

@NgModule({
  declarations: [
    AdminContentComponent
  ],
  imports: [AdminRoutingModule]
})
export class AdminModule {}
