import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AboutComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
