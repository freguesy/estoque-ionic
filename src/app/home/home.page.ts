import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ServiceService } from '../produto/service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {



  ngOnInit(){}

  constructor(
    private formBuilder: FormBuilder,
    private serviceService: ServiceService,
    
  ){}
}
  
