import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

	list: Producto[] = [];
	filteredList: Producto[] = [];
	cargando: boolean = true;

	constructor( private http: HttpClient ) { 
		this.cargarProductos();
	}


	private cargarProductos() {
		return new Promise( ( resolve, reject ) => {
			// Leer JSON de equipo desde firebase
			this.http.get('https://portfolio-db-6e327.firebaseio.com/productos_idx.json')
			  .subscribe( (resp: Producto[]) => {
			    this.list = resp;
			    this.cargando = false;
			    resolve();
			  });

		});
		

	}

	public getProducto( id: string) {
		return this.http.get(`https://portfolio-db-6e327.firebaseio.com/productos/${ id }.json`);
	}

	public filterProducto( texto: string) {

		if( this.list.length === 0) {
			// cargar productos
			this.cargarProductos().then( () => {
				//Ejecutar filtro despues de cargar productos
				this._filter(texto);
			});
		} else {
			// Filtrar productos
			this._filter(texto);
		}		
		return this.filteredList;
		
	}

	private _filter( texto: string ){
		texto = texto.toLowerCase();

		this.filteredList = this.list.filter( producto => {
			return (producto.categoria.toLowerCase().indexOf( texto ) >= 0 ||
				    producto.titulo.toLowerCase().indexOf( texto ) >= 0);
		});

	}
}
