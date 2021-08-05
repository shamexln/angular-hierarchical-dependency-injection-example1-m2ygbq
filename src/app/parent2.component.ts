import { Component, Optional } from '@angular/core';
import { AppService } from './app.service';
import { EagerService } from './eager/eager.service';
import { LazyService } from './lazy/lazy.service';

@Component({
  selector: 'parent2-component',
  template: `
    <div class="box">
      <strong>Parent2</strong>
      {{ appValue }}
      {{ eagerValue }}
      {{ lazyValue }}
      
      <child3-component></child3-component>
    </div>
  `,
  providers: []
})
export class Parent2Component {
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





