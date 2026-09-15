import { Injectable, signal } from '@angular/core';
import {
    Theme,
    ThemePreference
} from './theme.types';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private readonly storageKey = 'portfolio-theme';

    readonly preference = signal<ThemePreference>(
        this.getStoredPreference()
    );

    readonly theme = signal<Theme>(
        this.resolveTheme(this.preference())
    );

    constructor() {
        this.applyTheme(this.theme());

        this.watchSystemTheme();
    }

    setPreference(preference: ThemePreference): void {
        this.preference.set(preference);

        localStorage.setItem(
            this.storageKey,
            preference
        );

        const resolvedTheme =
            this.resolveTheme(preference);

        this.theme.set(resolvedTheme);

        this.applyTheme(resolvedTheme);
    }

    toggle(): void {
        const nextTheme =
            this.theme() === 'light'
                ? 'dark'
                : 'light';

        this.setPreference(nextTheme);
    }

    private resolveTheme(
        preference: ThemePreference
    ): Theme {

        if (preference === 'light') {
            return 'light';
        }

        if (preference === 'dark') {
            return 'dark';
        }

        if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
        }

        return 'light';
    }

    private getStoredPreference(): ThemePreference {
        if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
            return 'system';
        }

        try {
            const stored =
                localStorage.getItem(this.storageKey);

            if (
                stored === 'light' ||
                stored === 'dark' ||
                stored === 'system'
            ) {
                return stored;
            }
        } catch {
            return 'system';
        }

        return 'system';
    }

    private applyTheme(theme: Theme): void {
        if (typeof document === 'undefined') {
            return;
        }

        document.documentElement
            .setAttribute('data-theme', theme);

        document.documentElement
            .style.setProperty(
                'color-scheme',
                theme
            );
    }

    private watchSystemTheme(): void {
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
            return;
        }

        try {
            const mediaQuery = window.matchMedia(
                '(prefers-color-scheme: dark)'
            );

            mediaQuery.addEventListener(
                'change',
                () => {

                    if (this.preference() !== 'system') {
                        return;
                    }

                    const theme =
                        this.resolveTheme('system');

                    this.theme.set(theme);

                    this.applyTheme(theme);
                }
            );
        } catch {
            // Ignore if matchMedia listener fails in test environment
        }
    }
}