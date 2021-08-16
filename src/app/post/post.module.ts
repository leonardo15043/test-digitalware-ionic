import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewPostPage } from './pages/view-post/view-post.page';
import { IonicModule } from '@ionic/angular';
import { ListPostPage } from './pages/list-post/list-post.page';
import { ActionPostPage } from './pages/action-post/action-post.page';

import { PostPageRoutingModule } from './post-routing.module';
import { AlertModule } from '../core/modules/toast/alert.module';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPageRoutingModule,
    AlertModule
  ],
  declarations: [ViewPostPage,ListPostPage,ActionPostPage]
})
export class PostModule { 

  constructor(
  ){
  }
}
