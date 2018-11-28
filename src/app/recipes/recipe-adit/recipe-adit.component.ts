import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-adit',
  templateUrl: './recipe-adit.component.html',
  styleUrls: ['./recipe-adit.component.css']
})
export class RecipeAditComponent implements OnInit {

  id:number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params:Params)=>{
          this.id= +params['id'];
          this.editMode = params['id'] !=null;
        }
      )
  }

}
