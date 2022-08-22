import { Component, OnInit } from '@angular/core'
// import slickCss from '../../../node_modules/slick-carousel/slick/slick.scss'
// import slickThemeCss from '../../../node_modules/slick-carousel/slick/slick-theme.scss'

@Component({
  selector: 'app-slick-comp',
  templateUrl: './slick-comp.component.html',
  styleUrls: ['./slick-comp.component.scss']
})
export class SlickCompComponent implements OnInit {

  constructor() { }

  slideArray = [
    "Banner 1",
    "Banner 2",
    "Banner 3",
    "Banner 4",
    "Banner 5",
    "Banner 6",
    "Banner 7",
  ]

  ngOnInit(): void {
  }

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  trackByIndex(index: number, product: any) {
    return index;
  }
  

}
