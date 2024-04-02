import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor() { }

  http = inject(HttpClient);

  getImageOfTheDay(): Observable<any> {
    return this.http.get<any>("https://api.nasa.gov/planetary/apod?api_key=wh5Nrk1SQaJ1NbJCYmfcfCiYndZZGcD1Rre5eo0m");
  }
}
