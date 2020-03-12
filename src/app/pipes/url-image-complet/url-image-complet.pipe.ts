import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlImageComplet'
})
export class UrlImageCompletPipe implements PipeTransform {
  transform(value: string): string {
    const baseUrlImg = 'http://image.tmdb.org/t/p/w300';
    return `${baseUrlImg}${value}`;
  }
}
