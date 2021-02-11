import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SONComponent } from './SON/SON.component';
import { ÜNİVERSİTEComponent } from './ÜNİVERSİTE/ÜNİVERSİTE.component';
import { YksComponent } from './yks/yks.component';
import { DgsComponent } from './dgs/dgs.component';

@NgModule({
  declarations: [				
    AppComponent,
      SONComponent,
      ÜNİVERSİTEComponent,
      YksComponent,
      DgsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
