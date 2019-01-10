import { Component, OnInit } from '@angular/core';

import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoPagina } from '../../interfaces/info-pagina.interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  _service: InfoPaginaService;

  constructor( public infoPaginaService: InfoPaginaService ) { 
  	this._service = infoPaginaService;
  	console.log('hola');
  	console.log(this._service);
  	console.log(infoPaginaService.info);
  }

  ngOnInit() {
  }

}
