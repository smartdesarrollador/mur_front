import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Slider } from '../models/slider.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  selectCategory: Slider = new Slider();
  urlListar = environment.apiListarFilesSlider;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Slider> {
    return this.http.get(this.urlListar);
  }
}
