import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule, FormsModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})
export class Cursos implements OnInit {

  cursos: any[] = [];

  nuevo = {
    codigo: '',
    nombre: '',
    creditos: 0,
    catedratico: '',
    horario: '',
    cupoMaximo: 0
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.cargarInOrden();

  }

  cargarInOrden() {

    this.http
      .get<any[]>(
        'http://localhost:3000/api/cursos/inorden'
      )
      .subscribe(data => {

        this.cursos = data;

      });

  }

  cargarPreOrden() {

    this.http
      .get<any[]>(
        'http://localhost:3000/api/cursos/preorden'
      )
      .subscribe(data => {

        this.cursos = data;

      });

  }

  cargarPostOrden() {

    this.http
      .get<any[]>(
        'http://localhost:3000/api/cursos/postorden'
      )
      .subscribe(data => {

        this.cursos = data;

      });

  }

  agregarCurso() {

    this.http
      .post(
        'http://localhost:3000/api/cursos',
        this.nuevo
      )
      .subscribe(() => {

        this.cargarInOrden();

        this.nuevo = {
          codigo: '',
          nombre: '',
          creditos: 0,
          catedratico: '',
          horario: '',
          cupoMaximo: 0
        };

      });

  }

}