import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    // TODO: SFU import the feature module
    // path: 'feature-a',
    // loadChildren: () =>
    //   import('../feature-a/feature-a.module').then((m) => m.FeatureAModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
