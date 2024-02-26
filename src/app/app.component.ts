import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { PadreComponent } from "./padre/padre.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PadreComponent, RouterLink]
})


export class AppComponent {
  title = 'angular-y';
}
