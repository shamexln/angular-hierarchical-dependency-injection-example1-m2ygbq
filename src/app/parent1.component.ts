import { Component, Optional } from '@angular/core';
import { AppService } from './app.service';
import { EagerService } from './eager/eager.service';
import { LazyService } from './lazy/lazy.service';

@Component({
  selector: 'parent1-component',
  template: `
    <div class="box">
      <strong>Parent1</strong>
      {{ appValue }}
      {{ eagerValue }}
      {{ lazyValue }}

      <child1-component></child1-component>
      <child2-component></child2-component>

    </div>
  `,
  providers: []
})
export class Parent1Component {
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





