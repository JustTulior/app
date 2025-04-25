import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { UsersshowComponent } from "./components/usersshow/usersshow.component";
import { ShopsshowComponent } from './components/shopsshow/shopsshow.component';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, MenuComponent, UsersshowComponent, ShopsshowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
