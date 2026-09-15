import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter skills by category', () => {
    expect(component.selectedCategory()).toBe('all');
    expect(component.filteredSkills().length).toBe(12);

    component.setCategory('frontend');
    expect(component.selectedCategory()).toBe('frontend');
    expect(component.filteredSkills().every((s) => s.category === 'frontend')).toBe(true);

    component.setCategory('architecture');
    expect(component.filteredSkills().every((s) => s.category === 'architecture')).toBe(true);

    component.setCategory('tools');
    expect(component.filteredSkills().every((s) => s.category === 'tools')).toBe(true);
  });

  it('should open and close project details modal', () => {
    expect(component.activeProject()).toBeNull();

    const sampleProject = component.projects[0];
    component.openProject(sampleProject);
    expect(component.activeProject()).toEqual(sampleProject);

    component.closeProject();
    expect(component.activeProject()).toBeNull();
  });

  it('should update isCopied flag when copyEmail is called', async () => {
    expect(component.isCopied()).toBe(false);
    await component.copyEmail();
    expect(component.isCopied()).toBe(true);
  });
});
