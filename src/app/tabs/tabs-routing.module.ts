import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
    {
      path: "start",
      loadChildren: ()=>import("./start/start.module").then(hijo=>hijo.StartPageModule)
    },
    {
      path: "midel",
      loadChildren: ()=>import("./midel/midel.module").then(hijo=>hijo.MidelPageModule)
    },
    {
      path: "end",
      loadChildren: ()=>import("./end/end.module").then(hijo=>hijo.EndPageModule)
    },
    {
      path:"",
      redirectTo:"start",
      pathMatch: "full"
    }
    ]
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
   
  {
    path:"",
    redirectTo:"tabs/start",
    pathMatch: "full"
  }








];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
