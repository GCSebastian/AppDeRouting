import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./tabs/start/start.module').then(m => m.StartPageModule)
  },
  {
    path: 'midel',
    loadChildren: () => import('./tabs/midel/midel.module').then(m => m.MidelPageModule)
  },
  {
    path: 'end',
    loadChildren: () => import('./tabs/end/end.module').then(m => m.EndPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
