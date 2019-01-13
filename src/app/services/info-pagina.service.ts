import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};

  equipo: any[] = [];

  cargada = false;

  constructor( private http: HttpClient ) { 
  	console.log("Info pagina listo");

    this.loadInfo();

    this.loadEquipo();
  }

  private loadInfo() {
    // Leer JSON info-pagina.json
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private loadEquipo() {
    // Leer JSON de equipo desde firebase
    this.http.get('https://portfolio-db-6e327.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {
        this.equipo = resp;
      });

  }
}
