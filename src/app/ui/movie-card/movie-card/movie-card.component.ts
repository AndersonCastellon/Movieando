import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieModel } from 'src/app/models/Movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html'
})
export class MovieCardComponent implements OnInit {
  @Input() movie: MovieModel;
  @Output() clicked: EventEmitter<string>;
  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit() {}
}
