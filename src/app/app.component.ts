import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'noticias';

  constructor( private _noticiasService: NoticiaService){

  }


  buscarNoticia(parametros: any){
    console.log('Soy el padre') ;
    console.log(parametros);  
    this._noticiasService.getNoticias(parametros).subscribe(data => {
      console.log(data); 
    })
  }
}
