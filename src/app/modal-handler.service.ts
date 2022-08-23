import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalCompComponent } from './modal-comp/modal-comp.component';

@Injectable({
  providedIn: 'root'
})
export class ModalHandlerService {
  private componentRef!: ComponentRef<ModalCompComponent>
  private componentSubscriber!: Subject<string>
  constructor() { }

  openModal(entry: ViewContainerRef, modalTitle: string, modalBody: string){
    this.componentRef = entry.createComponent(ModalCompComponent)
    this.componentRef.instance.title = modalTitle
    this.componentRef.instance.body = modalBody
    this.componentRef.instance.closeMeEvent.subscribe(() => this.closeModal());
    this.componentRef.instance.confirmEvent.subscribe(() => this.confirm());
    this.componentSubscriber = new Subject<string>();
    return this.componentSubscriber.asObservable();
  }

  closeModal() {
    this.componentSubscriber.complete();
    this.componentRef.destroy();
  }

  confirm() {
    this.componentSubscriber.next('confirm');
    this.closeModal();
  }
}
