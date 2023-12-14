import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './components/itemsList/itemsList.component';
import { HeaderComponent } from './components/header/header.component';
import { ModificaComponent } from './components/modifica/modifica.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'about', component: ItemsListComponent},
  {path: 'modifica', component: ModificaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
