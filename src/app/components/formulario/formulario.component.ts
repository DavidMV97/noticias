import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  @Output() parametroSeleccionados = new EventEmitter<any>()

  categoriaSeleccionada = 'general' ; 
  paisSeleccionado = 'co' ; 

  categorias: any[] = [
    { value: 'general' , nombre: 'General' }, 
    { value: 'bussiness' , nombre: 'Negocios' },
    { value: 'entertaiment' , nombre: 'Entretenimiento' },
    { value: 'healt' , nombre: 'Salud' },
    { value: 'science' , nombre: 'Ciencia' },
    { value: 'sports' , nombre: 'Deportes' },
    { value: 'technology' , nombre: 'Tecnologia' }
  ]
    
  paises: any[] = [
    { value: 'co' , nombre: 'Colombia' }, 
    { value: 'br' , nombre: 'Brazil' }, 
    { value: 'fr' , nombre: 'Francia' }, 
    { value: 'hu' , nombre: 'Hungria' },
    { value: 'mx' , nombre: 'Mexico' }, 
    { value: 'gb' , nombre: 'Reino Unido' },
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    const PARAMETROS = {
       categoria: this.categoriaSeleccionada,
       pais: this.paisSeleccionado
    }

    this.parametroSeleccionados.emit(PARAMETROS)  ; 
  }

}
