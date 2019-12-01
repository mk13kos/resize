import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VIEWPORT_SIZE_CONFIG } from './viewport-size.config';
import { ViewportSizeDirective } from './viewport-size.directive';

@NgModule({
  declarations: [ViewportSizeDirective],
  exports: [ViewportSizeDirective],
  imports: [CommonModule],
  providers: [
    {
      provide: VIEWPORT_SIZE_CONFIG,
      useValue: {
        medium: 500,
        large: 900,
      }
    }
  ]
})
export class ViewportSizeModule {}
