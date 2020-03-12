import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from 'src/app/services/tmdb.service';
import { MovieModel } from 'src/app/models/Movie.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {
  private id: string;
  private searchText: string;
  public movie: MovieModel;
  public loading = true;
  constructor(
    private route: ActivatedRoute,
    private tmdb: TmdbService,
    private location: Location
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.searchText = this.route.snapshot.paramMap.get('txt');
    console.log(this.searchText);
    this.saveSearchText();
    this.getMovie();
  }

  getMovie() {
    this.tmdb.findMovie(this.id).subscribe((result: MovieModel) => {
      this.movie = result;
      this.loading = false;
    });
  }

  goBack() {
    this.location.back();
  }

  private saveSearchText() {
    if (this.searchText) {
      localStorage.setItem('txt', this.searchText);
    }
  }
}
