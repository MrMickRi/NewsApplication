import { Injectable } from '@angular/core';

const STORAGE_KEY = 'FavouriteArticles'

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private storage: Storage) { 

  }

  getAllFavouriteArticles(){
      return this.storage.get(STORAGE_KEY);
  }
  isFavourite(articlesId){
    return this.getAllFavouriteArticles().then(result => {
        return result && result.indexOf(articlesId) !== -1;
    })
  }
  favouriteArticle(articlesId){
      return this.getAllFavouriteArticles().then(result => {
          if(result){
              result.push(articlesId);
              return this.storage.set(STORAGE_KEY, result);
          }else{
              return this.storage.set(STORAGE_KEY, [articlesId])
          }
      });
  }
  unfavouriteArticle(articlesId){
      return this.getAllFavouriteArticles().then(result => {
          if(result){
              var index = result.indexOf(articlesId);
              result.splice(index,1);
              return this.storage.set(STORAGE_KEY, result);
          }
      })
  }

}
