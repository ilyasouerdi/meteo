import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class MeteoService {

private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
private apiKey = '4e567c17fe87bddde94de34fb24929a7';

constructor(private http: HttpClient) { }

getWeather(city: string): Observable<any> {
const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=fr`;
return this.http.get(url);
}
}
