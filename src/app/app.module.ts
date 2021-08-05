import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Parent1Component } from './parent1.component';
import { Parent2Component } from './parent2.component';

import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';
import { Child3Component } from './child3.component';

import { AppService } from './app.service';
import { RouterModule, Routes } from '@angular/router';
import { EagerComponent } from './eager/eager.component';
import { EagerService } from './eager/eager.service';
import { EagerModule } from './eager/eager.module';

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    EagerModule
  ],
  declarations: [
    AppComponent,
    Parent1Component,
    Parent2Component,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  bootstrap: [AppComponent],
  providers: [AppService]
})
export class AppModule {}
