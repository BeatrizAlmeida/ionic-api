import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Homepage', url: '/home', icon: 'home' },
    { title: 'Sair', url: '/home', icon: 'exit' },
  ];
  constructor() {}
}
