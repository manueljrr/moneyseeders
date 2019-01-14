import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../services/productos.service';
import { DetalleProducto } from '../../interfaces/detalle-producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  detalles: DetalleProducto;
  id: string;

  constructor( private route: ActivatedRoute, 
  	           public _service: ProductosService ) { }

  ngOnInit() {
  	this.route.params.subscribe( parametros => {

  		this._service.getProducto( parametros.id)
  			.subscribe((producto: DetalleProducto) => {
  				this.detalles = producto;
  				this.id = parametros.id;
  			});
  	});
  }

}
