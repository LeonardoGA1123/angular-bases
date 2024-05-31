import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DBZService {

  character: Character[] = [{
    id: uuid(),
    name: 'Krilling',
    power: 1000,
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500,
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 9000,
  }];

  OnNewCharacter( character: Character ): void{

    const newCharacter: Character = { id: uuid(), ...character }; //Operador spread


    this.character.push(newCharacter);
  }

  DeleteCharacterByID( id: string ){
    this.character = this.character.filter( character => character.id !== id );
  }

}
