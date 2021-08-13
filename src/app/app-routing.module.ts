import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'list-post',
    loadChildren: () => import('./post/list-post/list-post.module').then( m => m.ListPostPageModule)
  },
  {
    path: 'action-post',
    loadChildren: () => import('./post/action-post/action-post.module').then( m => m.ActionPostPageModule)
  },
  {
    path: 'view-post',
    loadChildren: () => import('./post/view-post/view-post.module').then( m => m.ViewPostPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
