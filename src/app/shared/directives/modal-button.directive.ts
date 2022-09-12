import { Directive, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalDataHandlerService } from '../services/modal-data-handler.service';

@Directive({
  selector: '[appModalButton]'
})
export class ModalButtonDirective {

  constructor(private eleRef: ElementRef<HTMLButtonElement>, private _dataService: ModalDataHandlerService) { }

  modalVariable !: any

  @Input() modalButtonNew !: any

  @ViewChild('modal', {static: false}) modalDiv !: ElementRef<HTMLDialogElement>
  sub !: Subscription

  @HostListener('click')
  onClick(){
    console.log(this.eleRef);
    console.log(this.eleRef.nativeElement.getAttribute('data-value'));
  }

  @HostListener('click')
  newBtnClick(){
    this.sub = this._dataService
    .dataButtonClicl(this.modalButtonNew)
    .subscribe((v) => console.log(v))
  }
}
