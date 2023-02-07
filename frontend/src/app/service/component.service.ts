import { ReceiverComponent } from '../receiver/receiver.component';
import { SenderComponent } from '../sender/sender.component';
import { Item } from './../typings/typing';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor() { }

  getComponent() {
    return [
      new Item(SenderComponent),
      new Item(ReceiverComponent)
    ]

  }
}
