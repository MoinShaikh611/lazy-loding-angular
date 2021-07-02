import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './core/common-modules/admin/admin.component';
import { UserComponent } from './core/common-modules/user/user.component';

const router:Routes =[
  {
    path:'admin',
    component:AdminComponent,
    loadChildren:() => import('./core/common-modules/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'user',
    component:UserComponent,
    loadChildren:() => import('./core/common-modules/user/user.module').then(m => m.UserModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
