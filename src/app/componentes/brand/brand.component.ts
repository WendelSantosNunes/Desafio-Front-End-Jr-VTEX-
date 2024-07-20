import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  public marcas: Marcas[] = [
    {
      image: "../../../assets/Marcas.svg",
      alt: "Product brand image"
    },
    {
      image: "../../../assets/Marcas.svg",
      alt: "Product brand image"
    },
    {
      image: "../../../assets/Marcas.svg",
      alt: "Product brand image"
    },
    {
      image: "../../../assets/Marcas.svg",
      alt: "Product brand image"
    },
    {
      image: "../../../assets/Marcas.svg",
      alt: "Product brand image"
    },
    {
      image: "../../../assets/Marcas.svg",
      alt: "Product brand image"
    },
    {
      image: "../../../assets/Marcas.svg",
      alt: "Product brand image"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public prevBtn() {
    const container = document.querySelector('.carousel-marcas-container');
    if (container) {
      container.scrollLeft -= 250;
    }
  }

  public nextBtn() {
    const container = document.querySelector('.carousel-marcas-container');
    if (container) {
      container.scrollLeft += 250;
    }
  }
}


export interface Marcas {
  image: string;
  alt: string
}
