import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Instrument } from '../models/instrument';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) {}

  getAllInstruments(): Observable<Instrument[]> {
    return this.http.get<Instrument[]>(environment.apiUrl + 'Catalog').pipe(
      map(response => {
        // paginatedResult.result = response.body;
        // if (response.headers.get('Pagination') != null) {
        //   paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        // }
        return response;
      })
    );
  }

  addInstrument(model: any): Observable<any> { //TODO
    return this.http.post(environment.apiUrl + 'Catalog', model).pipe(
      map((response: any) => {
        console.log(response);
        return response;
      })
    );
  }
}
