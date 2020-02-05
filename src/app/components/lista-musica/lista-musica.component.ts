import { Component, OnInit, Input, Output } from '@angular/core';
import { Musica } from '../../classes/musica.model';
import { MusicaService } from './../../services/musica.service';
import { MusicaAdicionar } from '../../classes/musica-adicionar.model';

@Component({
  selector: 'app-lista-musica',
  templateUrl: './lista-musica.component.html',
  styleUrls: ['./lista-musica.component.scss']
})
export class ListaMusicaComponent implements OnInit {

  constructor(private _musicaService: MusicaService) {

  }
  @Input() titulo: string;
  @Input() musicas: Array<Musica> = new Array<Musica>();
  musicaAdicionar: MusicaAdicionar = new MusicaAdicionar();
  musicaSelecionada: Musica;
  ngOnInit(): void {
  }

  removerMusica(musica: Musica): void {
    this.musicas.splice(this.musicas.findIndex(x => x.id === musica.id), 1)
  }

  adicionarMusica(): void {
    let proximoId = this.musicas[this.musicas.length - 1].id + 1;
    let musica = new Musica(proximoId, this.musicaAdicionar.nome, this.musicaAdicionar.autor, this.musicaAdicionar.album);
    this.musicas.push(musica);
  }

  selecionarMusica(musica: Musica): void {
    this.musicaSelecionada = musica;
  }

  finalizarEdicao(): void {
    this.musicaSelecionada = undefined;
  }
}
