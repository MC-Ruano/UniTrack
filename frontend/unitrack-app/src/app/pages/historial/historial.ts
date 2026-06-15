import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historial',
  imports: [CommonModule, FormsModule],
  templateUrl: './historial.html',
  styleUrl: './historial.css',
})
export class Historial implements OnInit {

  historial: any[] = [];

  nueva = {
    codigoCurso: '',
    nombreCurso: '',
    semestre: '',
    nota: 0
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.cargarHistorial();

  }

  cargarHistorial() {

    this.http
      .get<any[]>(
        'http://localhost:3000/api/historial'
      )
      .subscribe(data => {

        this.historial = data;

      });

  }

  cargarInverso() {

    this.http
      .get<any[]>(
        'http://localhost:3000/api/historial/inverso'
      )
      .subscribe(data => {

        this.historial = data;

      });

  }

  agregarInscripcion() {

    this.http
      .post(
        'http://localhost:3000/api/historial',
        this.nueva
      )
      .subscribe(() => {

        this.cargarHistorial();

        this.nueva = {
          codigoCurso: '',
          nombreCurso: '',
          semestre: '',
          nota: 0
        };

      });

  }

}