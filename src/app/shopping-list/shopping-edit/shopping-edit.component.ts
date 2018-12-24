import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  constructor(private shoppingListService:ShoppingListService) { }
  @ViewChild('f') slForm:NgForm;
  subscription :Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem : Ingredient;

  ngOnInit() {
    this.subscription= this.shoppingListService.startedEditing
      .subscribe(index=>{
        this.editMode = true;
        this.editedItemIndex = index; 
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({name:this.editedItem.name, amount: this.editedItem.amount});
      });
  }
  onSubmit(form:NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,Number(value.amount))
    if (this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient);
    }
    else{
      this.shoppingListService.addNewIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onClear(){
    this.slForm.reset();
    this.editMode= false;
  }

  onDelete(){
    this.onClear();
    this.shoppingListService.removeIngredient(this.editedItemIndex);
  }
  

}
