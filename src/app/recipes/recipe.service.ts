import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
    recipeSelcted = new EventEmitter<Recipe>();

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


}