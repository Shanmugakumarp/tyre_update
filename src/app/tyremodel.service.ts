import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NTyre } from './tyre';
import { Observable } from  'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TyremodelService {

  private _url: string = '/assets/data/tyremodels.json';

  constructor( private _http: HttpClient) {
   }

   getTyreData(): Observable<NTyre []> {
    return this._http.get<NTyre[]>(this._url);
   }
}
