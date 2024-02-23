import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from '../padre/padre.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [RouterOutlet, PadreComponent, FormsModule
  ],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})

export class HijoComponent {
  //este es el mensaje del padre
  //@Input() recibeHijo?: string;

  //este es el mensaje del hijo
  @Output() mensajeDesdeHijo = new  EventEmitter<string>();
  @Output() incrementarDesdeHijo = new  EventEmitter<void>();
  @Output() decrementarDesdeHijo = new  EventEmitter<void>();
  
  mensaje: string = '';
 
  

  enviarMesaje(){
    this.mensajeDesdeHijo.emit(this.mensaje);
    console.log(this.mensaje)
  }
  incrementar(){
    this.incrementarDesdeHijo.emit();
  }

  decrementar(){
    this.decrementarDesdeHijo.emit();
  }

}