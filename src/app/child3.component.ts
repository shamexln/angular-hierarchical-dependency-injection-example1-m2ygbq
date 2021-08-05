import { Component, Optional } from '@angular/core';
import { AppService } from './app.service';
import { EagerService } from './eager/eager.service';
import { LazyService } from './lazy/lazy.service';

@Component({
  selector: 'child3-component',
  template: `
    <div class="box">
    <strong>Child3</strong>
      {{ appValue }}
      {{ eagerValue }}
      {{ lazyValue }}
    </div>
  `,
  providers: []
})
export class Child3Component {
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
