import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

 
@Injectable()
export class RecipeService{
    constructor(private http : HttpClient){}
   recipesChanged = new Subject<Recipe[]>();
   public  recipes: Recipe[] =[];

    getRecipes(){
        return this.http.get<Recipe[]>('http://localhost:8000/recipes');
    }
    getRecipe(index:number){
        return this.recipes[index];
    }

    addRecipe(recipe:Recipe ){
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice());    
    }

    updateRecipe(index:number, newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());  

    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1)
        this.recipesChanged.next(this.recipes.slice());
    }

}