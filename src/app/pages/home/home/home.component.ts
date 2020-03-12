import { Component, OnInit, OnDestroy } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service';
import { MovieModel } from 'src/app/models/Movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  public inTheatres: MovieModel[];
  public populars: MovieModel[];
  public kidsPopulars: MovieModel[];

  public loadInTheatres = false;
  public loadPopulars = false;
  public loadKidPopulars = false;

  private inTheatresStream;
  private popularsStream;
  private kidsPopularsStream;

  constructor(private tmdb: TmdbService, private router: Router) {}

  ngOnInit() {
    this.deteleLocalStorage();
    this.getInTheatres();
    this.getPopulars();
    this.getKidsPopulars();
  }

  getInTheatres() {
    this.inTheatresStream = this.tmdb.getInTheatres().subscribe((data: any) => {
      const result = data.results as MovieModel[];
      this.inTheatres = result;
      this.loadInTheatres = true;
    });
  }

  getPopulars() {
    this.popularsStream = this.tmdb.getPopulars().subscribe((data: any) => {
      const result = data.results as MovieModel[];
      this.populars = result;
      this.loadPopulars = true;
    });
  }

  getKidsPopulars() {
    this.kidsPopularsStream = this.tmdb
      .getKidsPopulars()
      .subscribe((data: any) => {
        const result = data.results as MovieModel[];
        this.kidsPopulars = result;
        this.loadKidPopulars = true;
      });
  }

  ngOnClickDetailsMovie(movieId: string) {
    this.router.navigate(['home/movie', movieId]);
  }

  ngOnDestroy() {
    this.inTheatresStream.unsubscribe();
    this.popularsStream.unsubscribe();
    this.kidsPopularsStream.unsubscribe();
  }

  private deteleLocalStorage() {
    localStorage.removeItem('txt');
  }
}
