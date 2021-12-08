import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor(private ServicesService: ServicesService) {  } 

  ngOnInit(): void {
  }

}
