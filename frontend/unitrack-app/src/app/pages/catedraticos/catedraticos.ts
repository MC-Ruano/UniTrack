import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catedraticos',
  imports: [CommonModule, FormsModule],
  templateUrl: './catedraticos.html',
  styleUrl: './catedraticos.css',
})
export class Catedraticos implements OnInit {

  tabla: any[] = [];

  factorCarga = 0;

  nuevo = {
    codigo: '',
    nombre: '',
    apellido: '',
    especialidad: '',
    correo: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.cargarTabla();
    this.cargarFactor();

  }

  cargarTabla() {

    this.http
      .get<any[]>(
        'http://localhost:3000/api/catedraticos'
      )
      .subscribe(data => {

        this.tabla = data;

      });

  }

  cargarFactor() {

    this.http
      .get<any>(
        'http://localhost:3000/api/catedraticos/factor-carga'
      )
      .subscribe(data => {

        this.factorCarga = data.factorCarga;

      });

  }

  agregarCatedratico() {

    this.http
      .post(
        'http://localhost:3000/api/catedraticos',
        this.nuevo
      )
      .subscribe(() => {

        this.cargarTabla();
        this.cargarFactor();

        this.nuevo = {
          codigo: '',
          nombre: '',
          apellido: '',
          especialidad: '',
          correo: ''
        };

      });

  }

}