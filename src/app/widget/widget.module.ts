// widget.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';

@NgModule({
  declarations: [
    WidgetComponent,
    // Other components, directives, or pipes can be declared here if needed
  ],
  imports: [
    CommonModule,
    // Other modules can be imported here if needed
  ],
  exports: [
    WidgetComponent,
    // Export components, directives, or pipes if needed
  ],
})
export class WidgetModule {}
