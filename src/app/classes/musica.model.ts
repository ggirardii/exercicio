export class Musica {
  id: number;
  nome: string;
  autor: string;
  album: string;
  dataLancamento: Date;
  duracao: number;

  constructor(id: number, nome: string, autor: string, album: string = '', dataLancamento: Date = null, duracao: number = 0) {
    this.id = id;
    this.nome = nome;
    this.album = album;
    this.autor = autor;
    this.dataLancamento = dataLancamento;
    this.duracao = duracao;
  }
}
