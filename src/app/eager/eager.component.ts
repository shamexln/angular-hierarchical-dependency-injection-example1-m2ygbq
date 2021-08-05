import { Component, OnInit, Optional } from '@angular/core';
import { AppService } from '../app.service';
import { LazyService } from '../lazy/lazy.service';
import { EagerService } from './eager.service';

@Component({
  selector: 'app-eager',
  providers: [],
  template: `
    <div class="box">
      <strong>Eager component</strong>
      {{ appValue }}
      {{ eagerValue }}
      {{ lazyValue }}
    </div>
  `
})

export class EagerComponent  {

  appValue;
  eagerValue;
  lazyValue;

  constructor(
    @Optional() private appService: AppService,
    @Optional() private eagerService: EagerService,
    @Optional() private lazyService: LazyService
  ) {

    this.appValue = appService?.getSharedValue();
    this.eagerValue = eagerService?.getSharedValue();
    this.lazyValue = lazyService?.getSharedValue();


  }
}

