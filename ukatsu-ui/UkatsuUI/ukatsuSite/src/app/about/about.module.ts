import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtraitFrameComponent } from './protrait-frame/protrait-frame.component';
import { InfoContainerComponent } from './info-container/info-container.component';

@NgModule({
  declarations: [ProtraitFrameComponent, InfoContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [ProtraitFrameComponent, InfoContainerComponent]
})
export class AboutModule { }
