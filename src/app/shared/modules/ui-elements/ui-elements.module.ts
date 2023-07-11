import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { TagComponent } from '../../components/tag/tag.component';
import { SystemBtnComponent } from '../../components/system-btn/system-btn.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';

const uiElementsComponents = [
  CardComponent,
  TagComponent,
  SystemBtnComponent,
  AvatarComponent
]



@NgModule({
  declarations: [...uiElementsComponents],
  imports: [
    CommonModule,
  ],
  exports: [...uiElementsComponents]
})
export class UiElementsModule { }
