import { Component } from '@angular/core';
import { Theme } from './services/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tailwind-app';

  constructor(public themeService: Theme) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
