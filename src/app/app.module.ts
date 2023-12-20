import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ItemsListComponent } from './components/itemsList/itemsList.component';
import { groupFunctionsComponent } from './components/groupFunctions/groupFunctions.component';
import { ItemslistService } from './services/itemslist.service';
import { HeaderComponent } from './components/header/header.component';
import { ModificaComponent } from './components/modifica/modifica.component';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { TableDataComponent } from './components/table-data/table-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    groupFunctionsComponent,
    HeaderComponent,
    ModificaComponent,
    DettagliComponent,
    TableDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
