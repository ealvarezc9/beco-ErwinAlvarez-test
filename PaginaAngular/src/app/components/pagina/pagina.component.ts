import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public login: any;

  constructor( 
    private _route: ActivatedRoute, 
    private _router: Router
   
  ) {
    this.login = {
      nombre: '',
      apellido: ''
    }
   }

  ngOnInit(): void {
  
  }

  redireccion(){
    //alert("METODO DE REDIRECCION");
    this._router.navigate(['/formulario']);
  }

  onSubmit(){
    alert("Formulario Enviado");
  }

}
