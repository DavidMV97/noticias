import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  categorias: any[] = [
    { value: 'general' , nombre: 'General' }, 
    { value: 'bussiness' , nombre: 'Negocios' }
  ]
    
  paises: any[] = [
    { value: 'Co' , nombre: 'Colombia' }, 
    { value: 'Br' , nombre: 'Brazil' }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
