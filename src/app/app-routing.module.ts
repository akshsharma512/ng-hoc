import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { withRoute } from './hoc/withRoute';
import { jump } from './hoc/animation/jump';
import { withTooltip } from './hoc/withTooltip';

const routes: Routes = [
  {path: 'page', component: withTooltip(jump(withRoute(PageComponent)))},
  {path: '**', redirectTo: 'page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
