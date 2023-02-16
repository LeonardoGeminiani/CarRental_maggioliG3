import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AutoComponent } from './components/auto/auto.component'
import { AutoService } from './services/auto.service';
import { FormsModule } from '@angular/forms';
import { AutoModaleComponent } from './components/auto-modale/auto-modale.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditComponent,
    HomeComponent,
    NotFoundComponent,
    AutoComponent,
    AutoModaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  
  providers: [AutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
