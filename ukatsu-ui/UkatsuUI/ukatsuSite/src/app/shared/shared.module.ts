import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from '../shared/error/error.component';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { FooterRegionComponent } from '../shared/footer-region/footer-region.component';

@NgModule({
  declarations: [
    ErrorComponent,
    NavBarComponent,
    FooterRegionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ErrorComponent, NavBarComponent , FooterRegionComponent]
})
export class SharedModule { }
