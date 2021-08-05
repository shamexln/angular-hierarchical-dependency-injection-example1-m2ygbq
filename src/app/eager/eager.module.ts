import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerService } from './eager.service';
import { RouterModule, Routes } from '@angular/router';
import { EagerComponent } from './eager.component';
import { AppService } from '../app.service';

const routes: Routes = [{ path: 'eager', component: EagerComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [EagerComponent],
  exports: [EagerComponent],
  providers: [EagerService]
})
export class EagerModule {}
