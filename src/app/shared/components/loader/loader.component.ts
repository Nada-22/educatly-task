import { LoaderService } from './../../../core/services/loader.service';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { BlockUI } from 'primeng/blockui';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    BlockUI,
    ProgressSpinner
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class LoaderComponent {
  loading = true;
  loaderService=inject(LoaderService)
}
