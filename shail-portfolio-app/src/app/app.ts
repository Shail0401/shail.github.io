import { Component, signal } from '@angular/core';
import { Header } from './core/header/header';
import { Home } from './home/home';

@Component({
  imports: [Header, Home],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('shail-portfolio-app');
}
