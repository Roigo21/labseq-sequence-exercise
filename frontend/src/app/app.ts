import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Labseqfield} from './components/labseqfield/labseqfield';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Labseqfield],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
