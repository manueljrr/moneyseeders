import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CompanyService } from '../../services/company.service';
import { Company } from '../../interfaces/company.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  detalles: Company;
  id: string;

  constructor( private route: ActivatedRoute, 
  	           public _service: CompanyService ) { }

  ngOnInit() {
  	this.route.params.subscribe( parametros => {

  		this._service.getCompany( parametros.id)
  			.subscribe((company: Company) => {
  				this.detalles = company;
  				this.id = parametros.id;
          console.log(this.detalles);
  			});
  	});
  }

}
