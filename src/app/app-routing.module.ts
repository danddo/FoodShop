import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesStartComponent } from "./recipes/recipes-start/recipes-start.component";
import { RecipeAditComponent } from "./recipes/recipe-adit/recipe-adit.component";

const appRoutes:Routes = [
    {path: '' ,  redirectTo:'/recipes', pathMatch:'full'},
    {path: 'recipes' ,  component:RecipesComponent, children:[
        {path: '' ,  component:RecipesStartComponent, pathMatch:'full'},
        {path: 'new' ,  component:RecipeAditComponent},
        {path: ':id' ,  component:RecipeDetailComponent},
        {path: ':id/edit' , component:RecipeAditComponent},
        
    ]},
    {path: 'shopping-list' ,  component:ShoppingListComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]

})
export class AppRoutingModule{

}