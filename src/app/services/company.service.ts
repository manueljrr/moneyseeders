import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Company } from '../interfaces/company.interface';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

	list: Company[] = [];
	filteredList: Company[] = [];
	cargando: boolean = true;

	constructor( private http: HttpClient ) { 
		this.loadCompanies();
	}

	private loadCompanies() {
		return new Promise( ( resolve, reject ) => {
			// Leer JSON de equipo desde firebase
			this.http.get('https://portfolio-db-6e327.firebaseio.com/companies.json')
			  .subscribe( (resp: Company[]) => {
			    this.list = resp;
			    this.cargando = false;
			    resolve();
			  });

		});
		

	}

	public getCompany( id: string) {
		console.log('aqui estoy');
		return this.http.get(`https://portfolio-db-6e327.firebaseio.com/company-details/${ id }.json`);
	}

	public filterCompany( texto: string) {

		if( this.list.length === 0) {
			// cargar productos
			this.loadCompanies().then( () => {
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
			return (producto.name.toLowerCase().indexOf( texto ) >= 0 ||
				    producto.sector.toLowerCase().indexOf( texto ) >= 0 ||
				    producto.country.toLowerCase().indexOf( texto ) >= 0);
		});

	}

}
