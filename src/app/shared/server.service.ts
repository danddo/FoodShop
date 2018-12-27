import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient, private recipeService: RecipeService) { }

  getRecipes(){
    return this.http.get<Recipe[]>('http://localhost:8000/recipes')
      .subscribe( (recipes)=>{
        this.recipeService.fetchRecipes(recipes);
      });
  }
}
