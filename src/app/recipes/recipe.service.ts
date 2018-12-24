import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class RecipeService{
   recipesChanged = new Subject<Recipe[]>();
   private  recipes: Recipe[] = [
        new Recipe(
            "Test-Recipe",
            'this is a test',
            "https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg",
            [new Ingredient('Cheese',1),new Ingredient('Tomato',3)]),
            
        new Recipe(
            "Test-Recipe2",
            'this is a test2',
            "https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg",
            [new Ingredient('Meat',2),new Ingredient('Buns',2)]),
    ];

    getRecipes(){
        return this.recipes.slice();
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