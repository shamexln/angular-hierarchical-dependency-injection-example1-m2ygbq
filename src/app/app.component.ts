import { Component,Optional } from '@angular/core';
import { AppService } from './app.service';
import { EagerService } from './eager/eager.service';
import { LazyService } from './lazy/lazy.service';

@Component({
  selector: 'my-app',
  providers:[],
  template: `

    <div class="box">
    <ul>
      <li>
        <a routerLink="">Home</a>
      </li>
      <li>
        <a routerLink="/eager">Eager</a>
      </li>
      <li>
        <a routerLink="/lazy">Lazy</a>
      </li>
    </ul>

    <br />

    <strong>AppComponent </strong>

    {{ appValue }}
    {{ eagerValue }}
    {{ lazyValue }}

    <parent1-component></parent1-component>
    <parent2-component></parent2-component>

      <div class="box">
        <strong>Routed Component </strong>
        <router-outlet></router-outlet>
      </div>

    </div>


        <br><br>
    <a  href="https://www.tektutorialshub.com/angular/how-dependency-injection-resolution-works-in-angular/">hierarchical dependency injection system</a>
  `
})
export class AppComponent {
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
