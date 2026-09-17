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

  readonly emailAddress = 'shail04.learning@gmail.com';
  readonly isCopied = signal(false);

  // Skill category filter
  readonly selectedCategory = signal<'all' | 'frontend' | 'architecture' | 'tools'>('all');

  // Active modal project
  readonly activeProject = signal<Project | null>(null);

  readonly stats = [
    { label: 'Years Experience', value: '3+', sub: 'Full Stack Engineering' },
    { label: 'Features Shipped', value: '10+', sub: 'Production Grade' },
    { label: 'Core Strength', value: '4', sub: 'Angular, Go, Java, MySQL' },
    { label: 'Current Focus', value: 'Full Stack', sub: 'Reliable Product Delivery' },
  ];

  readonly skills: Skill[] = [
    {
      name: 'Angular & TypeScript',
      category: 'frontend',
      level: 'Advanced',
      icon: 'angular',
      highlight: 'Standalone components, Signals, RxJS, routing, forms, and strict typing',
    },
    {
      name: 'TypeScript & Strict Typing',
      category: 'frontend',
      level: 'Advanced',
      icon: 'ts',
      highlight: 'Generics, utility types, reusable components, and strict compilation',
    },
    {
      name: 'Modern CSS & SCSS',
      category: 'frontend',
      level: 'Advanced',
      icon: 'scss',
      highlight: 'Responsive layouts, SCSS, CSS variables, accessibility, and design tokens',
    },
    {
      name: 'Angular Material & CDK',
      category: 'frontend',
      level: 'Advanced',
      icon: 'material',
      highlight: 'Reusable UI, data tables, dialogs, menus, and responsive workflows',
    },
    {
      name: 'Go Backend Development',
      category: 'architecture',
      level: 'Advanced',
      icon: 'go',
      highlight: 'REST APIs, services, concurrency, validation, and maintainable backend design',
    },
    {
      name: 'Java & Spring Boot',
      category: 'architecture',
      level: 'Advanced',
      icon: 'java',
      highlight: 'Object-oriented design, REST services, dependency injection, and integrations',
    },
    {
      name: 'REST API Architecture',
      category: 'architecture',
      level: 'Advanced',
      icon: 'api',
      highlight: 'API contracts, authentication flows, error handling, and frontend integration',
    },
    {
      name: 'Reactive State & RxJS',
      category: 'architecture',
      level: 'Advanced',
      icon: 'rxjs',
      highlight: 'Signals, observables, declarative data flows, and predictable local state',
    },
    {
      name: 'MySQL & Data Modeling',
      category: 'architecture',
      level: 'Proficient',
      icon: 'mysql',
      highlight: 'Relational modeling, joins, indexing, query design, and data integrity',
    },
    {
      name: 'Testing & Quality Engineering',
      category: 'tools',
      level: 'Advanced',
      icon: 'test',
      highlight: 'Unit testing, component testing, API verification, and regression prevention',
    },
    {
      name: 'Git, GitHub & CI/CD',
      category: 'tools',
      level: 'Proficient',
      icon: 'git',
      highlight: 'Branching strategy, pull requests, code reviews, CI checks, and collaboration',
    },
    {
      name: 'Docker & Development Environments',
      category: 'tools',
      level: 'Proficient',
      icon: 'docker',
      highlight: 'Containerized services, repeatable local setup, and environment consistency',
    },
    {
      name: 'AWS & Cloud Fundamentals',
      category: 'tools',
      level: 'Proficient',
      icon: 'aws',
      highlight: 'Cloud deployment concepts, IAM awareness, environments, and service integration',
    },
    {
      name: 'Angular Build Tools & Vite',
      category: 'tools',
      level: 'Advanced',
      icon: 'vite',
      highlight: 'Angular CLI, build optimization, environment configuration, and deployment readiness',
    },
  ];

  readonly projects: Project[] = [
    {
      id: 'fullstack-product',
      title: 'Full Stack Product Showcase',
      category: 'Coming Soon',
      description: 'A production-ready full stack project is currently in development, bringing together an Angular interface, Go services, and relational data.',
      tags: ['Angular', 'Go', 'MySQL'],
      metric: 'Coming Soon',
      featured: true,
    },
    {
      id: 'angular-go-application',
      title: 'Angular + Go Application',
      category: 'Coming Soon',
      description: 'A full stack Angular and Go application is being shaped into a polished case study focused on API integration and maintainable delivery.',
      tags: ['Angular', 'Go', 'REST APIs'],
      metric: 'Coming Soon',
      featured: true,
    },
    {
      id: 'java-mysql-system',
      title: 'Java and MySQL Backend System',
      category: 'Coming Soon',
      description: 'A Java and MySQL backend project is in progress, with emphasis on service design, business logic, and dependable data access.',
      tags: ['Java', 'MySQL', 'Backend'],
      metric: 'Coming Soon',
      featured: true,
    },
  ];

  readonly milestones: Milestone[] = [
    {
      period: '2024 — 2026',
      role: 'Software Engineer',
      company: 'Securly Softwares',
      description:
        'Contributing across frontend and backend systems using Angular, Golang, and PHP to deliver reliable product features.',
      achievements: [
        'Built and shipped production-grade Angular features with reusable components and API integrations.',
        'Developed and maintained Golang services and supported PHP-based application workflows.',
        'Collaborated with product and engineering teams to deliver quality improvements across the stack.',
      ],
    },
    {
      period: '2023 — 2024',
      role: 'Software Engineer',
      company: 'IBM',
      description:
        'Worked on backend engineering with Golang and Java, building dependable services and implementing business requirements.',
      achievements: [
        'Implemented backend features and RESTful integrations using Golang and Java.',
        'Worked with relational data and service-level logic to support production applications.',
        'Participated in code reviews, debugging, and iterative Agile delivery.',
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
