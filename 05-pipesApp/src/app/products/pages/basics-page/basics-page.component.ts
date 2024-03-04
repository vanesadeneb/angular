import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'karla';
  public nameUpper: string = 'KARLA';
  public fullName: string = 'KaRlA SoUzA';

  public customDate: Date = new Date();
}
