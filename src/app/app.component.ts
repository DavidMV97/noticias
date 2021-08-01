import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listNoticias: any[] = [] ; 
  loading = false ; 

  constructor( private _noticiasService: NoticiaService){

  }

  buscarNoticia(parametros: any){
     this.loading = true ; 
     this.listNoticias = []  ; 
    this._noticiasService.getNoticias(parametros).subscribe(data => {
      this.loading = false ; 
      this.listNoticias = data.articles ; 
    }, error => {
      console.log(error); 
      this.loading = false ; 
    })
  }
}
