import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'widget-demo';
  isNodeExpanded: boolean = false;
  isNodeExpanded1: boolean = false;
  isNodeExpanded2: boolean = false;
  isNodeExpanded3: boolean = false;

  toggleNode(i : number): void {
    if (i == 0 ) this.isNodeExpanded = !this.isNodeExpanded;
    else if ( i == 1 ) this.isNodeExpanded1 = !this.isNodeExpanded1;
    else if ( i == 2 ) this.isNodeExpanded2 = !this.isNodeExpanded2;
    else if ( i == 3 ) this.isNodeExpanded3 = !this.isNodeExpanded3;
  }
}
