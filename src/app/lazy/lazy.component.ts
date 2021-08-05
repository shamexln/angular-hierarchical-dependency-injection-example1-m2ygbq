import { Component, OnInit, Optional } from '@angular/core';
import { AppService } from '../app.service';
import { EagerService } from '../eager/eager.service';
import { LazyService } from './lazy.service';


@Component({
  selector: 'app-lazy',
  template: `
    <div class="box">
      <strong>Lazy component</strong>
      {{ appValue }}
      {{ eagerValue }}
      {{ lazyValue }}
      </div>
  `,
  providers: []
})
export class LazyComponent {
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



