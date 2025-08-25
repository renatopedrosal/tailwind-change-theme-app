import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Theme {
  private currentTheme: 'light' | 'dark' | 'alt' = 'light';

  constructor() {
    // Inicializa tema com base no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'alt') {
      this.currentTheme = savedTheme;
    }
    this.applyTheme();
  }

  // Novo método para alternar entre os temas
  toggleTheme() {
    if (this.currentTheme === 'light') {
      this.currentTheme = 'dark';
    } else if (this.currentTheme === 'dark') {
      this.currentTheme = 'alt';
    } else {
      this.currentTheme = 'light';
    }
    localStorage.setItem('theme', this.currentTheme);
    this.applyTheme();
  }

  private applyTheme() {
    const body = document.body; // Altera no body para corresponder ao CSS
    body.classList.remove('dark', 'alt'); // Remove classes de tema existentes
    
    if (this.currentTheme !== 'light') {
      body.classList.add(this.currentTheme);
    }
  }

  // Mantido para compatibilidade, mas pode ser removido
  isDarkMode() {
    return this.currentTheme === 'dark';
  }

  // Novo método para obter o tema atual
  getCurrentTheme() {
    return this.currentTheme;
  }
}
