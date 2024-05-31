//Angular imports
import { Component, OnInit } from '@angular/core';

//Component imports
import { ListComponent } from '../components/list/list.component';
import { AddCharacterComponent } from '../components/add-character/add-character.component';

//Interfaces imports
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: true,
  imports:[
    ListComponent,
    AddCharacterComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor( private dbzService: DBZService ){ }

  get characters(): Character[]{
    return [...this.dbzService.character];
  }

  onDeleteCharacter( id: string ): void{
    this.dbzService.DeleteCharacterByID( id );
  }

  onNewCharacter( character: Character ): void{
    this.dbzService.OnNewCharacter( character );
  }

}
