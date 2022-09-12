import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-data-comp',
  templateUrl: './modal-data-comp.component.html',
  styleUrls: ['./modal-data-comp.component.scss']
})
export class ModalDataCompComponent implements OnInit {


  @Input() modalTarget: string = ''
  @Input() modalTargetButton: string = ''
  @Input() buttonText: string = ''
  @ViewChild('demoButton') demoButton!: ElementRef<HTMLButtonElement>
  @ViewChild('targetModal') targetModal!: ElementRef<HTMLDivElement>
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    console.log(this.demoButton.nativeElement);
    this.targetModal.nativeElement.classList.toggle('collapse');
  }
  
  removeClass(){
  }

}
