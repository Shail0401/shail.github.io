import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { ThemePreference } from '../theme/theme.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly themeService = inject(ThemeService);
  readonly isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  setThemePreference(pref: ThemePreference): void {
    this.themeService.setPreference(pref);
  }
}
