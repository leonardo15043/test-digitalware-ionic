import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'list-post',
        loadChildren: () => import('../post/list-post/list-post.module').then(m => m.ListPostPageModule)
      },
      {
        path: 'favorite-posts',
        loadChildren: () => import('../post/list-post/list-post.module').then(m => m.ListPostPageModule)
      } 
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/list-post',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
