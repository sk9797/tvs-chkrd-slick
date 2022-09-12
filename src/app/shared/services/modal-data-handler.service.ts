import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalDataHandlerService {
  private componentSubscriber!: Subject<string>

  constructor() { }

  dataButtonClicl(btn: any){
    this.componentSubscriber = new Subject<string>();
  return this.componentSubscriber.asObservable();
  }
}
