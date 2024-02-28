# Buenas Practicas de Angular 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## New Project
```
    Programa de Angular del canal SErgie Code: https://www.youtube.com/watch?v=soInCF7nbDw
```
(Spanish)=> nota de leo:
Para la creacion de un nuevo proyecto desde la consola el siguiente comando `ng new nombre-proyecto` 

## Build Module

Con el comando `ng generate module nombre-modulo` o `ng g m nombre-modulo` _(se crea una carpeta con los archivos correspondientes al modulo)_ 

## Build Component

Con el comando `ng generate component nombre-componente` o `ng g c nombre-componente` 

- _Se crearan 4 archivos:_
    el componente => `component.ts`
    el HTML => `component.html`
    el CSS => `component.css`
    el archivo de prueba => `component.spec.ts`

## Build Directiva

Con el Comando `ng generate directive nombre-directiva` o simplificado `ng g d nombre-directiva`
_crea tanto un decorador como constructor_

## Build PIPES con CLI

Con el Comando `ng generate pipe nombre-pipe` o simplificado `ng g p nombre-pipe`
_se crea un decorador_ 

## Manejar ESTRUCTURAS DE CONTROL 
_Principales estructuras_ 

`ngIf`: Permite mostrar u ocultar un elemento en fincion de una expresion booleana.
`ngFor`: Utilizado para iterear sobre una lista y renderizar elementos repetitivos.
`ngSwitch`: Muestra un bloque de contenido segubn el valor de una expresion.
`ngClass`: permite cambiar dinamicamente las clase de un elemento
`ngStyle`: permite cambiar dinamicamente los estilos de un elemento
`ngContainer`: Es una estructura de control que no afecta el DOM.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
