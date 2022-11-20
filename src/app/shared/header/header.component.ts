import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoPagina } from '../../interfaces/info-pagina.interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _service: InfoPaginaService,
  			   private router: Router ) { 
  }

  ngOnInit() {
  }
 
  buscarProducto( texto: string ) {
  	
  	if( texto.length < 1) {
  		return;
  	}

  	this.router.navigate(['/search', texto]);
  }

}
