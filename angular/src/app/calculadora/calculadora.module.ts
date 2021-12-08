import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components';
import { ServicesService } from './services';

@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentsComponent
  ],
  providers: [
    ServicesService
  ]
})
export class CalculadoraModule { }
