import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Upload } from '../models/upload.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  selectCategory: Upload = new Upload();
  urlListar = environment.apiListarFilesBanner;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Upload> {
    return this.http.get(this.urlListar);
  }
}
