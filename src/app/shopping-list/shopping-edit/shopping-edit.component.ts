import { Component, OnInit} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }
  onAdd(name:HTMLInputElement,amount:HTMLInputElement){
    this.shoppingListService.addNewIngredient(new Ingredient(name.value,Number(amount.value)));
  }

}
