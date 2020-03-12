import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlImageCompletPipe } from './url-image-complet.pipe';

@NgModule({
  declarations: [UrlImageCompletPipe],
  imports: [CommonModule],
  exports: [UrlImageCompletPipe]
})
export class UrlImageCompletModule {}
