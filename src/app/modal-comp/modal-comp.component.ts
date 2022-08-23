import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal-comp',
  templateUrl: './modal-comp.component.html',
  styleUrls: ['./modal-comp.component.scss']
})
export class ModalCompComponent implements OnInit, OnDestroy {
  @Input() title: string =''
  @Input() body: string =''
  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
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
