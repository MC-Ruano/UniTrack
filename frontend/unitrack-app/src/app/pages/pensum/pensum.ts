import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pensum',
  imports: [CommonModule, FormsModule],
  templateUrl: './pensum.html',
  styleUrl: './pensum.css',
})
export class Pensum implements OnInit {

  grafo: any = {};

  resultado: string[] = [];

  tieneCiclos = false;

  nuevoCurso = {
    codigo: ''
  };

  nuevoPrerequisito = {
    origen: '',
    destino: ''
  };

  inicioRecorrido = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.cargarGrafo();
    this.verificarCiclos();

  }

  cargarGrafo() {

    this.http
      .get<any>('http://localhost:3000/api/pensum')
      .subscribe(data => {

        this.grafo = data;

      });

  }

  agregarCurso() {

    this.http
      .post(
        'http://localhost:3000/api/pensum/curso',
        this.nuevoCurso
      )
      .subscribe(() => {

        this.cargarGrafo();

        this.nuevoCurso = {
          codigo: ''
        };

      });

  }

  agregarPrerequisito() {

    this.http
      .post(
        'http://localhost:3000/api/pensum/prerrequisito',
        this.nuevoPrerequisito
      )
      .subscribe(() => {

        this.cargarGrafo();

        this.nuevoPrerequisito = {
          origen: '',
          destino: ''
        };

      });

  }

  bfs() {

    this.http
      .get<string[]>(
        `http://localhost:3000/api/pensum/bfs/${this.inicioRecorrido}`
      )
      .subscribe(data => {

        this.resultado = data;

      });

  }

  dfs() {

    this.http
      .get<string[]>(
        `http://localhost:3000/api/pensum/dfs/${this.inicioRecorrido}`
      )
      .subscribe(data => {

        this.resultado = data;

      });

  }

  topologico() {

    this.http
      .get<string[]>(
        'http://localhost:3000/api/pensum/topologico'
      )
      .subscribe(data => {

        this.resultado = data;

      });

  }

  verificarCiclos() {

    this.http
      .get<any>(
        'http://localhost:3000/api/pensum/ciclos'
      )
      .subscribe(data => {

        this.tieneCiclos =
          data.tieneCiclos;

      });

  }

}