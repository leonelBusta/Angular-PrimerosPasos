import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoGrande?: string ;
  hermanoPequeño?: string ;

  getHermanoGrande(): string{
    return this.hermanoGrande ||'';
  }
  setHermanoGrande(hermano: string){
    this.hermanoGrande = hermano;
  }
  getHermanoPequeño(): string{
    return this.hermanoPequeño ||'';
  }
  setHermanoPequeño(hermano: string){
    this.hermanoPequeño = hermano;
  }
  
  saludar(hermano: string){
    console.log( `hola ${hermano} `);
  }

  preguntarPorHijo(): string {
    return '¿Como esta hijo?';
  }

  constructor() { }
}
