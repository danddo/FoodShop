import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService{
    ingredients : Ingredient[] = [
        new Ingredient ('Apples',5),
        new Ingredient ('Tomatoes',10)  
      ];

      addNewIngredient(data){
        this.ingredients.push(data);
        this.onNewIngredient.emit(this.ingredients.slice());
      }

      getIngredients(){
          return this.ingredients.slice();
      }

      onNewIngredient = new EventEmitter<Ingredient[]>();
}