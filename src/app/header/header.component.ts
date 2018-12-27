import { Component, OnInit,} from '@angular/core';
import { ServerService } from '../shared/server.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serverService:ServerService) { }

  ngOnInit() {
  }

  onSaveData(){
    
  }

  onFetchData(){
    this.serverService.getRecipes();
  }




}
