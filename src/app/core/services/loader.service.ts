
import { inject, Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  blockUI = signal<boolean>(false);

  setAppLoading(loading: boolean) {
    this.blockUI.set(loading)
  }

}