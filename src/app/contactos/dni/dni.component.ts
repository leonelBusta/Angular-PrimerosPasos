import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule,
  ReactiveFormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dni-input',
  standalone: true,
  imports: [
    DniComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
],
  templateUrl: './dni.component.html',
  styleUrl: './dni.component.css'
})
export class DniComponent implements OnChanges{


  @Input() tipoDni: string= 'DNI';
  formularioDocumento: FormGroup;
  variableNueva: string = 'DNI';
  /*usuarioActivo: any = {
    nombre: 'Leonel',
    apellido: 'Bustamante',
    dni: '12345678',
  }
*/
  constructor(private form: FormBuilder) {
    this.formularioDocumento = this.form.group({
      dni: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
      this.variableNueva = changes?.['tipoDni'].currentValue;
  }
  hasErrors(controlName: string, errorType: string) {
    return (
      this.formularioDocumento.get(controlName)?.hasError(errorType) &&
      this.formularioDocumento.get(controlName)?.touched
    );
  }
}
