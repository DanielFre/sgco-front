import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthFooterComponent } from './auth-footer/auth-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AdminLayoutComponent,
    AuthFooterComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AdminLayoutComponent,
    AuthFooterComponent
  ]
})
export class ComponentsModule { }
