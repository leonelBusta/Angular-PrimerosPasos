import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [
    FormsModule, // Forms de tipo plantilla
    ReactiveFormsModule, // formario de tipo reactivo
    CommonModule,
  ],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css',
})
export class ContactosComponent implements OnInit {
  formularioContacto: FormGroup;
  tipoDni: string= 'DNI';
  /*usuarioActivo: any = {
    nombre: 'Leonel',
    apellido: 'Bustamante',
    dni: '12345678',
  }
*/
  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: ['', ],
      dni: ['', ],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value =>{
      this.tipoDni = value;
    });
      /* this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo)
      this.formularioContacto.patchValue({
        nombre: this.usuarioActivo.nombre,
        apellido: this.usuarioActivo.apellido,
        dni: this.usuarioActivo.dni,
      })
      this.formularioContacto.get('nombre')?.disable()
      this.formularioContacto.get('apellido')?.disable()
      this.formularioContacto.get('dni')?.disable()
*/
  }
  hasErrors(controlName: string, errorType: string) {
    return (
      this.formularioContacto.get(controlName)?.hasError(errorType) &&
      this.formularioContacto.get(controlName)?.touched
    );
  }
  enviar() {
    console.log(this.formularioContacto);
  }
}
