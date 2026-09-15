import { Component, computed, inject, signal } from '@angular/core';
import { ThemeService } from '../core/theme/theme.service';

export interface Skill {
  name: string;
  category: 'frontend' | 'architecture' | 'tools';
  level: string;
  icon: string;
  highlight: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metric: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Milestone {
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly themeService = inject(ThemeService);

  readonly emailAddress = 'shail.dev.contact@gmail.com';
  readonly isCopied = signal(false);

  // Skill category filter
  readonly selectedCategory = signal<'all' | 'frontend' | 'architecture' | 'tools'>('all');

  // Active modal project
  readonly activeProject = signal<Project | null>(null);

  readonly stats = [
    { label: 'Years Experience', value: '4+', sub: 'In Web & Angular' },
    { label: 'Projects Shipped', value: '25+', sub: 'Production Grade' },
    { label: 'Lighthouse Score', value: '99', sub: 'Performance & CWV' },
    { label: 'Type-Safe Code', value: '100%', sub: 'Signals & Strict TS' },
  ];

  readonly skills: Skill[] = [
    {
      name: 'Angular 22 & Modern Features',
      category: 'frontend',
      level: 'Expert',
      icon: 'angular',
      highlight: 'Standalone, Signals, LinkedSignals, Control Flow, Signal Forms',
    },
    {
      name: 'TypeScript & Strict Typing',
      category: 'frontend',
      level: 'Advanced',
      icon: 'ts',
      highlight: 'Generics, Utility Types, Inference, Strict Compilation',
    },
    {
      name: 'Modern CSS & SCSS',
      category: 'frontend',
      level: 'Advanced',
      icon: 'scss',
      highlight: 'Design Tokens, CSS Variables, Glassmorphism, Micro-interactions',
    },
    {
      name: 'Angular Material & CDK',
      category: 'frontend',
      level: 'Advanced',
      icon: 'material',
      highlight: 'M3 Theming, Virtual Scroll, Drag & Drop, Popovers',
    },
    {
      name: 'Reactive Architecture & RxJS',
      category: 'architecture',
      level: 'Expert',
      icon: 'rxjs',
      highlight: 'Higher-Order Streams, Signal Interop, Declarative State',
    },
    {
      name: 'Web Performance & CWV',
      category: 'architecture',
      level: 'Advanced',
      icon: 'speed',
      highlight: 'LCP Optimization, Lazy Loading, Deferrable Views (@defer)',
    },
    {
      name: 'Accessibility (A11y)',
      category: 'architecture',
      level: 'Advanced',
      icon: 'a11y',
      highlight: 'WCAG 2.1 AA, ARIA Semantics, Keyboard Focus & AXE Audits',
    },
    {
      name: 'State Management Systems',
      category: 'architecture',
      level: 'Advanced',
      icon: 'state',
      highlight: 'Signal Stores, Local State Patterns, Predictable Mutation',
    },
    {
      name: 'Testing (Vitest & Unit)',
      category: 'tools',
      level: 'Advanced',
      icon: 'test',
      highlight: 'Component Testing, Signal State Testing, Testbed Isolation',
    },
    {
      name: 'Git, CI/CD & Automation',
      category: 'tools',
      level: 'Proficient',
      icon: 'git',
      highlight: 'Branching Strategy, GitHub Actions, Automated Build Checks',
    },
    {
      name: 'Node.js & RESTful APIs',
      category: 'tools',
      level: 'Proficient',
      icon: 'node',
      highlight: 'API Integration, HTTP Interceptors, Error Resilience',
    },
    {
      name: 'Angular Build Tools & Vite',
      category: 'tools',
      level: 'Advanced',
      icon: 'vite',
      highlight: 'ESBuild Toolchain, Tree Shaking, Fast HMR, Bundle Splitting',
    },
  ];

  readonly projects: Project[] = [
    {
      id: 'enterprise-dashboard',
      title: 'Real-Time Enterprise Analytics Dashboard',
      category: 'Enterprise SaaS',
      description:
        'A high-performance reactive dashboard with live data streaming, dynamic theme toggling, interactive charting, and sub-second load times using Angular 22 Signals.',
      tags: ['Angular 22', 'Signals', 'RxJS', 'SCSS Tokens', 'Vitest'],
      metric: '60 FPS Stream • 99 Performance',
      featured: true,
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 'commerce-storefront',
      title: 'Ultra-Fast Accessible E-Commerce Platform',
      category: 'E-Commerce & Web',
      description:
        'Full-featured modern storefront featuring signal-based cart state management, deferrable views (@defer), image optimization, and full WCAG AA compliance.',
      tags: ['Angular', 'TypeScript', 'A11y', 'Signal Forms', 'Responsive'],
      metric: '0.9s LCP • 100% Accessible',
      featured: true,
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 'design-system',
      title: 'Unified Design System & Token Engine',
      category: 'Architecture & UI',
      description:
        'Scalable component library and design system powered by CSS custom properties, seamless dark/light modes, accessible primitives, and fluid typography.',
      tags: ['Design Tokens', 'Angular CDK', 'SCSS', 'Color Scheme'],
      metric: '30+ Components • Multi-Theme',
      featured: true,
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ];

  readonly milestones: Milestone[] = [
    {
      period: '2024 — Present',
      role: 'Senior Frontend & Angular Engineer',
      company: 'Tech Solutions & Enterprise Products',
      description:
        'Spearheading modern Angular architectures, driving Signal adoption, optimizing Core Web Vitals, and mentoring frontend teams in reactive best practices.',
      achievements: [
        'Migrated core apps to Angular standalone architecture and modern signals, decreasing bundle size by 35%.',
        'Achieved consistent 95+ Google Lighthouse scores across production web portals.',
        'Engineered reusable design token library with instant theme switching support.',
      ],
    },
    {
      period: '2022 — 2024',
      role: 'Frontend Web Developer',
      company: 'Digital Innovation Labs',
      description:
        'Designed and shipped interactive customer-facing web applications, responsive dashboards, and API-driven reactive experiences.',
      achievements: [
        'Built 10+ end-to-end features with strict TypeScript and reactive RxJS pipelines.',
        'Implemented comprehensive automated unit test suites with Vitest and Jest.',
        'Integrated WCAG AA accessibility compliance across all web surfaces.',
      ],
    },
    {
      period: '2020 — 2022',
      role: 'Associate Software Engineer',
      company: 'Software Systems Inc.',
      description:
        'Developed foundational web components, integrated RESTful backend APIs, and participated in Agile development cycles.',
      achievements: [
        'Collaborated on modernizing legacy monolithic interfaces into componentized web apps.',
        'Authored clean CSS/SCSS styling frameworks with cross-browser consistency.',
      ],
    },
  ];

  // Computed filtered skills based on active category
  readonly filteredSkills = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') {
      return this.skills;
    }
    return this.skills.filter((skill) => skill.category === category);
  });

  setCategory(category: 'all' | 'frontend' | 'architecture' | 'tools'): void {
    this.selectedCategory.set(category);
  }

  openProject(project: Project): void {
    this.activeProject.set(project);
  }

  closeProject(): void {
    this.activeProject.set(null);
  }

  async copyEmail(): Promise<void> {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(this.emailAddress);
      }
      this.isCopied.set(true);
      setTimeout(() => {
        this.isCopied.set(false);
      }, 2500);
    } catch {
      // Fallback
      this.isCopied.set(true);
      setTimeout(() => {
        this.isCopied.set(false);
      }, 2500);
    }
  }
}
