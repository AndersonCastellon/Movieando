import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie/movie.component';
import { UrlImageCompletModule } from '../../pipes/url-image-complet/url-image-complet.module';

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, MovieRoutingModule, UrlImageCompletModule]
})
export class MovieModule {}
