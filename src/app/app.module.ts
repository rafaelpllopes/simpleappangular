import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { CadastraUsersComponent } from './cadastra-users/cadastra-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CadastraUsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
