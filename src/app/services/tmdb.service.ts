import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = '59610138622a94f8329a60a067256e62';
  private language = '&language=es';
  private url = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {}

  getPopulars() {
    const endPoint = `/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}${this.language}`;
    return this.http.jsonp(`${this.url}${endPoint}`, 'callback');
  }

  getInTheatres() {
    const dif = 2629750000;
    const date = new Date(new Date().getTime());
    const lte = this.formatDate(date);
    const gte = this.formatDate(new Date(date.getTime() - dif));

    let endPoint = `/discover/movie?primary_release_date.gte=${gte}`;
    endPoint += `&primary_release_date.lte=${lte}&api_key=${this.apiKey}${this.language}`;

    return this.http.jsonp(`${this.url}${endPoint}`, 'callback');
  }

  getKidsPopulars() {
    let endPoint = `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc`;
    endPoint += `&api_key=${this.apiKey}${this.language}`;

    return this.http.jsonp(`${this.url}${endPoint}`, 'callback');
  }

  findMovie(id: string) {
    const endPoint = `/movie/${id}?api_key=${this.apiKey}${this.language}&external_source=imdb_id`;
    return this.http.jsonp(`${this.url}${endPoint}`, 'callback');
  }

  searchMovie(query: string) {
    const endPoint = `/search/movie?api_key=${this.apiKey}${this.language}&query=${query}&include_adult=true`;
    return this.http.jsonp(`${this.url}${endPoint}`, 'callback');
  }

  private formatDate(date: Date): string {
    const YYYY = date.getUTCFullYear();
    const MM = `0${date.getUTCMonth()}`;
    const DD = `0${date.getUTCDay()}`;

    return `${YYYY}-${MM}-${DD}`;
  }
}
