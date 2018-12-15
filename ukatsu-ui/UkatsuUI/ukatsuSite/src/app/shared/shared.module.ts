import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from '../shared/error/error.component';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { FooterRegionComponent } from '../shared/footer-region/footer-region.component';
import { LoggingService } from './services/logging.service';
import { UserService } from '../shared/services/user.service';
import { MediaPanelComponent } from './media-panel/media-panel.component';

@NgModule({
  declarations: [
    ErrorComponent,
    NavBarComponent,
    FooterRegionComponent,
    MediaPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ErrorComponent, NavBarComponent , FooterRegionComponent, MediaPanelComponent],
  providers: [UserService, LoggingService]
})
export class SharedModule { }
