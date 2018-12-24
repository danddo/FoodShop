import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from 'rxjs';

export class ShoppingListService{
    startedEditing =  new Subject<number>(); 
    ingredients : Ingredient[] = [
        new Ingredient ('Apples',5),
        new Ingredient ('Tomatoes',10)  
      ];

      addNewIngredient(data){
        this.ingredients.push(data);
        this.onNewIngredient.next(this.ingredients.slice());
      }

      getIngredients(){
          return this.ingredients.slice();
      }

      getIngredient(index){
          return this.ingredients[index];
      }

      updateIngredient(index:number,ingredient:Ingredient){
          this.ingredients[index]= ingredient;
          this.onNewIngredient.next(this.ingredients.slice());

      }
      removeIngredient(index){
          this.ingredients.splice(index,1);
          this.onNewIngredient.next(this.ingredients.slice());
      }

      onNewIngredient = new Subject<Ingredient[]>();
}