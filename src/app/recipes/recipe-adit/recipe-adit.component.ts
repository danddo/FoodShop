import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-adit',
  templateUrl: './recipe-adit.component.html',
  styleUrls: ['./recipe-adit.component.css']
})
export class RecipeAditComponent implements OnInit {

  id:number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService:RecipeService, private router:Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params:Params)=>{
          this.id= +params['id'];
          this.editMode = params['id'] !=null;
          this.initForm();
        }
      )
  }
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  private initForm(){
   
    let recipeName ='';
    let recipeImagepath='';
    let recipeDescription='';
    let recipeIngredients = new FormArray([]);

    if (this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName= recipe.name;
      recipeImagepath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe.ingredients){
        for (let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name,Validators.required),
              'amount': new FormControl(ingredient.amount,
                [Validators.required,
                 Validators.pattern(/^[0-9]+[0-9]*$/)])
            })
          );
        }
      }
    
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl (recipeImagepath, Validators.required),
      'description': new FormControl (recipeDescription, Validators.required),
      'ingredients':recipeIngredients
    });
  }

  onSubmit(){
    if (this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value)
    }
    else{
      this.recipeService.addRecipe(this.recipeForm.value);  
    }
    this.router.navigate(['../'],{relativeTo:this.route});
    
  }

  onAddIngredeint(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,   [Validators.required,
          Validators.pattern(/^[0-9]+[0-9]*$/)])
      })
    );
  }
  onDeleteIngredient(i:number){
    (<FormArray>this.recipeForm.get(['ingredients'])).removeAt(i);
  }



}
