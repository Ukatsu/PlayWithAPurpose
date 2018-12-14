import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { ContentListComponent } from './content-list/content-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SliderComponent, SidePanelComponent, ContentListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SliderComponent, SidePanelComponent, ContentListComponent]
})
export class HomeModule { }
