import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable}     from 'rxjs/Observable';

let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
let options = new RequestOptions({headers:headers})

@Injectable()
export class PlantService{
    notes: any;
    constructor(private http: Http){}
    getPlants() {
        return this.http.get('http://localhost:8080/api/notes').map(res => res.json())    
    }
    postPlant(plantObj) {
        /* let params: URLSearchParams = new URLSearchParams();
        params.set('search', plantObj); */
        return this.http.post('http://localhost:8080/api/note', {search: plantObj}).map(res => res.json())
           
    }
    
}