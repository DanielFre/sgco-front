import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './modules/components/components.module';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './modules/admin-layout/admin-layout.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
