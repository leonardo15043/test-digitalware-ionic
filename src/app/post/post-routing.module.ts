import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPostPage } from './pages/list-post/list-post.page';
import { ActionPostPage } from './pages/action-post/action-post.page';
import { ViewPostPage } from './pages/view-post/view-post.page';

const routes: Routes = [ 
      {
        path: 'list',
        component: ListPostPage
      },
      {
        path: 'actions',
        component: ActionPostPage
      },
      {
        path: 'view',
        component: ViewPostPage
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPageRoutingModule {}
