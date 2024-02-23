import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';
import { PadreComponent } from '../padre/padre.component';
import { EstiloHermanosDirective } from '../estilo-hermanos.directive';

@Component({
  selector: 'app-hermano',
  standalone: true,
  imports: [PadreComponent, EstiloHermanosDirective],
  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css'
})
export class HermanoComponent implements OnInit {
  nombre?: string;

  constructor(
    private _ServicioFamiliar : ServicioFamiliarService
    ) {}

    ngOnInit(): void {
      this._ServicioFamiliar.setHermanoPequeño('pedro');
      this.nombre = this._ServicioFamiliar.getHermanoPequeño();
    }

    saludar(){
      this._ServicioFamiliar.saludar(this._ServicioFamiliar.getHermanoGrande()||'');
     }
  
     preguntar(){
      console.log(this._ServicioFamiliar.preguntarPorHijo() );
    }

}
