import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { UrlImageCompletModule } from '../../pipes/url-image-complet/url-image-complet.module';

@NgModule({
  declarations: [MovieCardComponent],
  imports: [CommonModule, UrlImageCompletModule],
  exports: [MovieCardComponent]
})
export class MovieCardModule {}
