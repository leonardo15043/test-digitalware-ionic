import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionPostPage } from './action-post.page';

const routes: Routes = [
  {
    path: '',
    component: ActionPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionPostPageRoutingModule {}
