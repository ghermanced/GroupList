import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemslistComponent } from './itemslist/itemslist.component';
import { ShortserviceComponent } from './shortservice/shortservice.component';
import { ItemslistService } from './itemslist.service';
import { GrouplistComponent } from './grouplist/grouplist.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemslistComponent,
    ShortserviceComponent,
    GrouplistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ItemslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
