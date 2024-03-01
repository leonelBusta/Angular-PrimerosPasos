import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DniComponent } from "./dni/dni.component";

@Component({
    selector: 'app-contactos',
    standalone: true,
    templateUrl: './contactos.component.html',
    styleUrl: './contactos.component.css',
    imports: [
        FormsModule, // Forms de tipo plantilla
        ReactiveFormsModule, // formario de tipo reactivo
        CommonModule,
        DniComponent
    ]
})
export class ContactosComponent implements OnInit {
  formularioContacto: FormGroup;
  tipoDni: string= 'DNI';
  mostrarDNI?: boolean;
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
      tipoDni: [''],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {
    this.formularioContacto.get('nombre')?.setValue('leonel')
    this.formularioContacto.get('nombre')?.disable()
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value =>{
      this.tipoDni = value;
      this.mostrarDNI = value != '';
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
  ngOnDestroy(): void {
    console.log('Se destruyo el component')  
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
