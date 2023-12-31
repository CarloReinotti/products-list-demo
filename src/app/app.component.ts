import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'widget-demo';
  isNodeExpanded: boolean[] = [false, false, false, false, false, false, false, false];

  toggleNode(i: number): void {
    this.isNodeExpanded[i] = !this.isNodeExpanded[i];
  }
}
