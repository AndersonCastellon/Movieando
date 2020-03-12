import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service';
import { MovieModel } from 'src/app/models/Movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  public movies: MovieModel[];
  public queryText: string;
  constructor(private tmdb: TmdbService, private router: Router) {}

  ngOnInit() {
    this.restoreSearch();
  }

  searchMovie(query: string) {
    this.queryText = query;
    if (query.length >= 3) {
      this.tmdb.searchMovie(query).subscribe((result: any) => {
        this.movies = result.results as MovieModel[];
      });
    }
  }

  ngOnClickDetailsMovie(movieId: string) {
    this.router.navigate(['search/movie', movieId, this.queryText]);
  }

  private restoreSearch() {
    if (localStorage.getItem('txt')) {
      const searchText = localStorage.getItem('txt');
      this.searchMovie(searchText);
    }
  }
}
