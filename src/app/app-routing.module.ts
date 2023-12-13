import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemslistComponent } from './itemslist/itemslist.component';
import { GrouplistComponent } from './grouplist/grouplist.component';

const routes: Routes = [
  {path: '', component: GrouplistComponent},
  {path: 'about', component: ItemslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
