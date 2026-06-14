import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estudiantes',
  imports: [CommonModule, FormsModule],
  templateUrl: './estudiantes.html',
  styleUrl: './estudiantes.css',
})
export class Estudiantes implements OnInit {

  estudiantes: any[] = [];

  nuevo = {
    carnet: '',
    nombre: '',
    apellido: '',
    correo: '',
    fechaNacimiento: '',
    carrera: '',
    semestreActual: 1
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes() {

    this.http
      .get<any[]>('http://localhost:3000/api/estudiantes')
      .subscribe(data => {

        this.estudiantes = data;

      });

  }

  agregarEstudiante() {

    this.http
      .post(
        'http://localhost:3000/api/estudiantes',
        this.nuevo
      )
      .subscribe(() => {

        this.cargarEstudiantes();

        this.nuevo = {
          carnet: '',
          nombre: '',
          apellido: '',
          correo: '',
          fechaNacimiento: '',
          carrera: '',
          semestreActual: 1
        };

      });

  }

}