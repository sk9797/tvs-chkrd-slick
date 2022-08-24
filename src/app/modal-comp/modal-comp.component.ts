import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ModalHandlerService } from '../modal-handler.service';


@Component({
  selector: 'app-modal-comp',
  templateUrl: './modal-comp.component.html',
  styleUrls: ['./modal-comp.component.scss']
})
export class ModalCompComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() title: string = ''
  @Input() body: string = ''
  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();
  @Input() modalActive: boolean = false
  @Input() modalOpening: boolean = false
  @Input() modalClosing: boolean = false

  @ViewChild('close') closeButtonElement!: ElementRef<HTMLElement>
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    console.log(this.closeButtonElement)
    this.closeButtonElement.nativeElement.focus()
  }  

  closeMe() {
    this.closeMeEvent.emit('');
  }
  confirm() {
    this.confirmEvent.emit('');
  }
  ngOnDestroy(): void {
    console.log(' Modal destroyed');
  }
}
