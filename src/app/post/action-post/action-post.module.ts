import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionPostPageRoutingModule } from './action-post-routing.module';

import { ActionPostPage } from './action-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionPostPageRoutingModule
  ],
  declarations: [ActionPostPage]
})
export class ActionPostPageModule {}
