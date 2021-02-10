import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo: string;

  constructor() {
    this.user = {
      nombre: '',
      apellido: '',
      id: '',
      email:'',
    }
   }

  ngOnInit(): void {

  }

  onSubmit(){
    alert("Formulario de Datos Guardado.");
  }

  hasDadoClick(){
    alert('Formulario Invalido');
  }
}
