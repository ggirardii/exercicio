import { Component, OnInit } from '@angular/core';
import { Musica } from './classes/musica.model';
import { MusicaService } from './services/musica.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  musicasFavoritas: Array<Musica> = new Array<Musica>();
  musicasMaisOuvidas: Array<Musica> = new Array<Musica>();

  constructor(private _musicaService: MusicaService) { }

  ngOnInit() {
    this.musicasFavoritas = this._musicaService.buscarMusicasFavoritas();
    this.musicasMaisOuvidas = this._musicaService.buscarMusicasMaisOuvidas();
  }
}
