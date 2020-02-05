import { Injectable } from '@angular/core';
import { Musica } from '../classes/musica.model';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  private _musicasFavoritas: Array<Musica> = [
    new Musica(1, 'Back in Black', 'AC/DC', 'Back in Black', new Date('1980-7-25')),
    new Musica(2, 'Another one Bites the Dust', 'QUEEN', 'The Game', new Date('1980-8-22')),
    new Musica(3, 'Fortunate Son', 'Creedence', 'Willy and the Poor Boys'),
    new Musica(4, 'Sound of Silence', 'Simon & Garfunkel')
  ];

  private _musicasMaisOuvidas: Array<Musica> = [
    new Musica(1, 'Best of You', 'Foo Fighters', 'In Your Honor', new Date('2005-5-30')),
    new Musica(2, 'Stranger Things Have Happened', 'Foo Fighters', 'Echoes, Silence, Patience & Grace')
  ];

  constructor() { }

  buscarMusicasFavoritas(): Array<Musica> {
    return this._musicasFavoritas;
  }

  buscarMusicasMaisOuvidas(): Array<Musica> {
    return this._musicasMaisOuvidas;
  }

  removerMusica(musica: Musica): void {
    this._musicasFavoritas.splice(this._musicasFavoritas.findIndex(x => x.id === musica.id), 1)
  }

}
