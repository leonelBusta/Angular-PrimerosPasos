import { Component, OnInit } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";
import { HermanoComponent } from '../hermano/hermano.component';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
    selector: 'app-padre',
    standalone: true,
    templateUrl: './padre.component.html',
    styleUrl: './padre.component.css',
    imports: [HijoComponent, HermanoComponent]
})
export class PadreComponent implements OnInit {
  nombre?: string;

  constructor(
    private _ServicioFamiliar : ServicioFamiliarService
    ) {}
    ngOnInit(): void {
      this._ServicioFamiliar.setHermanoGrande('Juan');
      this.nombre = this._ServicioFamiliar.getHermanoGrande();
    }

    saludar(){
      this._ServicioFamiliar.saludar(this._ServicioFamiliar.getHermanoPequeño() ||'');
    }

    preguntar(){
      console.log(this._ServicioFamiliar.preguntarPorHijo() );
    }
  
  
  mensajeRecibido: string = '';
  recibirMensaje($event: string) {
    this.mensajeRecibido = $event;
    
  }

  //Contador
  valorContador: number = 0;
  incrementar(){
    this.valorContador++;
    console.log(this.valorContador);
  }
  decrementar(){
    this.valorContador--;
  }
}
