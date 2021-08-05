import { Injectable } from '@angular/core';

//@Injectable({ providedIn: 'root' })
@Injectable()
export class EagerService {
  sharedValue: string;

  constructor() {
    console.log('Shared Service initialised');
    this.sharedValue = 'Eager:' + Math.round(Math.random() * 100);
    console.log(this.sharedValue);
  }

  public getSharedValue() {
    return this.sharedValue;
  }
}
