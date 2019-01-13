import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

	list: Producto[] = [];
	cargando: boolean = true;

	constructor( private http: HttpClient ) { 
		this.cargarProductos();
	}


	private cargarProductos() {
	// Leer JSON de equipo desde firebase
	this.http.get('https://portfolio-db-6e327.firebaseio.com/productos_idx.json')
	  .subscribe( (resp: Producto[]) => {
	    this.list = resp;
	    this.cargando = false;
	  });

	}
}
