import { DgsComponent } from './dgs/dgs.component';
import { YksComponent } from './yks/yks.component';
import { SONComponent } from './SON/SON.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ÜNİVERSİTEComponent } from './ÜNİVERSİTE/ÜNİVERSİTE.component';

const routes: Routes = [
  { path: 'kart', component: SONComponent },
  { path: 'hazırlık', component: ÜNİVERSİTEComponent},
  { path: 'yks', component: YksComponent},
  { path: 'dgs', component: DgsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
