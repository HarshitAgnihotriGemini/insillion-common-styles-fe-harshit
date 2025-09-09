import { Component } from '@angular/core';

@Component({
  selector: 'app-colors',
  standalone: false,
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss',
})
export class ColorsComponent {
  public colorPalettes = [
    {
      name: 'Brand Colors - Blue',
      colors: [
        {
          name: '--blue-100',
          hex: '#e9efff',
          variable: 'var(--blue-100)',
          textColor: 'dark',
        },
        {
          name: '--blue-200',
          hex: '#dde0f9',
          variable: 'var(--blue-200)',
          textColor: 'dark',
        },
        {
          name: '--blue-300',
          hex: '#a1c0f2',
          variable: 'var(--blue-300)',
          textColor: 'dark',
        },
        {
          name: '--blue-400',
          hex: '#71a1ec',
          variable: 'var(--blue-400)',
          textColor: 'dark',
        },
        {
          name: '--blue-500',
          hex: '#1362df',
          variable: 'var(--blue-500)',
          textColor: 'light',
        },
        {
          name: '--blue-600',
          hex: '#336ddf',
          variable: 'var(--blue-600)',
          textColor: 'light',
        },
        {
          name: '--blue-700',
          hex: '#0f4eb2',
          variable: 'var(--blue-700)',
          textColor: 'light',
        },
        {
          name: '--blue-800',
          hex: '#082759',
          variable: 'var(--blue-800)',
          textColor: 'light',
        },
        {
          name: '--blue-900',
          hex: '#07224d',
          variable: 'var(--blue-900)',
          textColor: 'light',
        },
      ],
    },
    {
      name: 'Neutral Colors',
      colors: [
        {
          name: '--white',
          hex: '#ffffff',
          variable: 'var(--white)',
          textColor: 'dark',
        },
        {
          name: '--neutral-100',
          hex: '#fcfbfc',
          variable: 'var(--neutral-100)',
          textColor: 'dark',
        },
        {
          name: '--neutral-150',
          hex: '#f5f5f5',
          variable: 'var(--neutral-150)',
          textColor: 'dark',
        },
        {
          name: '--neutral-200',
          hex: '#efefef',
          variable: 'var(--neutral-200)',
          textColor: 'dark',
        },
        {
          name: '--neutral-300',
          hex: '#909cb2',
          variable: 'var(--neutral-300)',
          textColor: 'dark',
        },
        {
          name: '--neutral-500',
          hex: '#888888',
          variable: 'var(--neutral-500)',
          textColor: 'light',
        },
        {
          name: '--neutral-700',
          hex: '#595959',
          variable: 'var(--neutral-700)',
          textColor: 'light',
        },
        {
          name: '--neutral-800',
          hex: '#4c5a63',
          variable: 'var(--neutral-800)',
          textColor: 'light',
        },
        {
          name: '--neutral-900',
          hex: '#161a23',
          variable: 'var(--neutral-900)',
          textColor: 'light',
        },
        {
          name: '--black',
          hex: '#000000',
          variable: 'var(--black)',
          textColor: 'light',
        },
      ],
    },
    {
      name: 'Semantic Colors',
      colors: [
        {
          name: '--red-500',
          hex: '#dc3545',
          variable: 'var(--red-500)',
          textColor: 'light',
        },
      ],
    },
  ];
}
