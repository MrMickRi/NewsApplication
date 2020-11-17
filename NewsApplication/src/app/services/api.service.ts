import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    apiKey = 'eXWdJJcGlKPjikvqecBSKAQd6ZTjrDNW';

    constructor(private http: HttpClient) { }

    getBusinessNews() {
        return this.http.get('https://www.breakingbadapi.com/api/episodes')
    }
    getArticle(id) {
        return this.http.get('https://content.guardianapis.com/${id}?api-key=a007ac0a-881b-4ef1-8626-d6177f076104')
    }

}