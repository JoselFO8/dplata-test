import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenefitsComponent } from './components/benefits/benefits.component';

const routes: Routes = [
  {
    path: 'auth', 
    loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'client', 
    loadChildren: () => import('@modules/client/client.module').then((m) => m.ClientModule)
  },
  {
    path: 'benefits', 
    component: BenefitsComponent
  },
  {
    path: '**', 
    redirectTo: 'auth', 
    pathMatch: 'full', 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
