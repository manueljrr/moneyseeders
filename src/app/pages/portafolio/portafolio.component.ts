import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor( public _service: CompanyService ) { }

  ngOnInit() {
  }

}
