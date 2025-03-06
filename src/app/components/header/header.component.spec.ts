import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo image with correct alt text', () => {
    const logoElement: HTMLElement = fixture.nativeElement.querySelector('.logo img');
    expect(logoElement).toBeTruthy();
    expect(logoElement.getAttribute('alt')).toBe('Logo da aplicação Memoteca');
  });

  it('should render the description text', () => {
    const descriptionElement: HTMLElement = fixture.nativeElement.querySelector('.logo p');
    expect(descriptionElement).toBeTruthy();
    expect(descriptionElement.textContent).toContain('Guarde trechos de músicas, citações de livros, pensamentos e suas melhores ideias.');
  });

  it('should render the computer image with correct alt text', () => {
    const computerImageElement: HTMLElement = fixture.nativeElement.querySelector('.imagem');
    expect(computerImageElement).toBeTruthy();
    expect(computerImageElement.getAttribute('alt')).toBe('Imagem de um computador');
  });

  it('should have the correct HTML structure', () => {
    const headerElement: HTMLElement = fixture.nativeElement.querySelector('header');
    expect(headerElement).toBeTruthy();
    expect(headerElement.classList.contains('cabecalho')).toBeTrue();
    expect(headerElement.classList.contains('ff-inter')).toBeTrue();

    const logoElement: HTMLElement | null = headerElement.querySelector('.logo');
    expect(logoElement).toBeTruthy();

    const computerImageElement: HTMLElement | null = headerElement.querySelector('.imagem');
    expect(computerImageElement).toBeTruthy();
  });

  it('should have the correct CSS classes', () => {
    const headerElement: HTMLElement = fixture.nativeElement.querySelector('header');
    expect(headerElement.classList.contains('cabecalho')).toBeTrue();
    expect(headerElement.classList.contains('ff-inter')).toBeTrue();

    const logoElement: HTMLElement | null = headerElement.querySelector('.logo');
    expect(logoElement).toBeTruthy();

    const computerImageElement: HTMLElement | null = headerElement.querySelector('.imagem');
    expect(computerImageElement).toBeTruthy();
  });

  it('should have the correct image sources', () => {
    const logoElement: HTMLImageElement = fixture.nativeElement.querySelector('.logo img');
    expect(logoElement.src).toContain('logo.png');

    const computerImageElement: HTMLImageElement = fixture.nativeElement.querySelector('.imagem');
    expect(computerImageElement.src).toContain('computer.png');
  });
});
