import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Item } from '../typings/typing';
import { ComponentService } from '../service/component.service';
import { ComponentDirective } from '../directive/component.directive';
import { Instance } from '../interface/instance';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(ComponentDirective, { static: true }) compDirective!: ComponentDirective;

  adcomp: Item[] = [];

  constructor(private compService: ComponentService) { }

  ngOnInit(): void {

    this.adcomp = this.compService.getComponent();
    this.loadComponent(0)
  }


  loadComponent(data:number) {

    const ComponentItem = this.adcomp[data];

    const viewContainerRef = this.compDirective.ViewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent<Instance>(ComponentItem.component);
  }

}
