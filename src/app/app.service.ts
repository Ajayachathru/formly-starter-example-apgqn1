import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialData } from './app.interface';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getMaterials(): Observable<MaterialData[]> {
    return this.http.get('assets/json/materials.json') as Observable<MaterialData[]>;
  }
}
