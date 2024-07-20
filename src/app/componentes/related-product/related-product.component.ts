import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.css']
})
export class RelatedProductComponent implements OnInit {

  public listProduct: ListProduct[] = [
    {
      image: "../../../assets/telephone.png",
      alt: "Image telephone",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      oldPrice: "R$ 30,90",
      NewPrice: "R$ 28,90",
      installments: "ou 2x de R$ 49,95 sem juros",
      front: "Frente grátis"
    },
    {
      image: "../../../assets/telephone.png",
      alt: "Image telephone",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      oldPrice: "R$ 30,90",
      NewPrice: "R$ 28,90",
      installments: "ou 2x de R$ 49,95 sem juros",
      front: "Frente grátis"
    },
    {
      image: "../../../assets/telephone.png",
      alt: "Image telephone",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      oldPrice: "R$ 30,90",
      NewPrice: "R$ 28,90",
      installments: "ou 2x de R$ 49,95 sem juros",
      front: "Frente grátis"
    },
    {
      image: "../../../assets/telephone.png",
      alt: "Image telephone",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      oldPrice: "R$ 30,90",
      NewPrice: "R$ 28,90",
      installments: "ou 2x de R$ 49,95 sem juros",
      front: "Frente grátis"
    },
    {
      image: "../../../assets/telephone.png",
      alt: "Image telephone",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      oldPrice: "R$ 30,90",
      NewPrice: "R$ 28,90",
      installments: "ou 2x de R$ 49,95 sem juros",
      front: "Frente grátis"
    },
    {
      image: "../../../assets/telephone.png",
      alt: "Image telephone",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      oldPrice: "R$ 30,90",
      NewPrice: "R$ 28,90",
      installments: "ou 2x de R$ 49,95 sem juros",
      front: "Frente grátis"
    },
    {
      image: "../../../assets/telephone.png",
      alt: "Image telephone",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      oldPrice: "R$ 30,90",
      NewPrice: "R$ 28,90",
      installments: "ou 2x de R$ 49,95 sem juros",
      front: "Frente grátis"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public prevBtn() {
    const container = document.querySelector('.carousel'); // Seletor do elemento que contém os cards
    if (container) {
      container.scrollLeft -= 300; // Ajuste o valor conforme necessário
    }
  }

  public nextBtn() {
    const container = document.querySelector('.carousel');
    if (container) {
      container.scrollLeft += 200; // Ajuste o valor conforme necessário
    }
  }


}

export interface ListProduct {
  image: string;
  alt: string;
  description: string;
  oldPrice: string;
  NewPrice: string;
  installments: string;
  front:string
}
