import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-box',
  standalone: true,
  imports: [],
  templateUrl: './empty-box.component.html',
  styleUrl: './empty-box.component.scss'
})
export class EmptyBoxComponent {
  @Input() mainTitle = 'There is no data currently!';
  @Input() mainDesc = '';
}
