import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { bloomAdd } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() onAddData =  new EventEmitter<{name:string,amount:number}>();
  constructor() { }

  ngOnInit() {
  }
  onAdd(name:HTMLInputElement,amount:HTMLInputElement){
    this.onAddData.emit({name:name.value,amount:Number(amount.value)});

    console.log(name.value)
  }

}
