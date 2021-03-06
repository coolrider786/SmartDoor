import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { map } from 'rxjs/operators';
import { InputList } from '../../classes/inputlist';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class InputDataService {

  constructor(private http: HttpClient) { }

  getinputalllist(dcdId, adId) {
    return this.http.get(`${API_URL}/api/dcd/${dcdId}/ad/${adId}/input?max=2&offset=0`)
    .pipe(
      map((response: Response) => {
        const data = response;
        return data;
      })
      );
  }

  getinputlist(dcdId, adId, id) {
    return this.http.get(`${API_URL}/api/dcd/${dcdId}/ad/${adId}/input/${id}`);
  }

  putinputlist(dcdId, adId, id, inputlist: InputList) {
    return this.http.put(`${API_URL}/api/dcd/${dcdId}/ad/${adId}/input/${id}`, inputlist, httpOptions);
  }
}
