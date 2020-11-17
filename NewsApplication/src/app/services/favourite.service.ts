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
  isFavourite(artcileID){
    return this.getAllFavouriteArticles().then(result => {
        return result && result.indexOf(artcileID) !== -1;
    })
  }
  favouriteArticle(artcileID){
      return this.getAllFavouriteArticles().then(result => {
          if(result){
              result.push(artcileID);
              return this.storage.set(STORAGE_KEY, result);
          }else{
              return this.storage.set(STORAGE_KEY, [artcileID])
          }
      });
  }
  unfavouriteArticle(artcileID){
      return this.getAllFavouriteArticles().then(result => {
          if(result){
              var index = result.indexOf(artcileID);
              result.splice(index,1);
              return this.storage.set(STORAGE_KEY, result);
          }
      })
  }

}
