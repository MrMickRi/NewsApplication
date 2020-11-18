import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    apiKey = 'eXWdJJcGlKPjikvqecBSKAQd6ZTjrDNW';

    constructor(private http: HttpClient) { }

    getBusinessNews() {
        return this.http.get('https://content.guardianapis.com/search?business&api-key=a007ac0a-881b-4ef1-8626-d6177f076104')
    }
    getSportsNews() {
        return this.http.get('https://content.guardianapis.com/search?q=sport&api-key=a007ac0a-881b-4ef1-8626-d6177f076104')
    }
    getFinanceNews() {
        return this.http.get('https://content.guardianapis.com/search?q=finance&api-key=a007ac0a-881b-4ef1-8626-d6177f076104')
    }
    getArticle(articles_id) {
        return this.http.get('https://content.guardianapis.com/${id}?api-key=a007ac0a-881b-4ef1-8626-d6177f076104')
    }

}
