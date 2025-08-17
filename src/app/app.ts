import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // <-- use RouterModule
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // <-- fixed
})
export class App {
  protected readonly title = signal('stack-partner-pro');
}
