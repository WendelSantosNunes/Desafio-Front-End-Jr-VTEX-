import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productCategoryList: ProductCategory[] = [
    {
      link: "../../../assets/monitorar-tablet-e-smartohone 1.svg",
      alt: "Image Technology",
      text: "Tecnologia",
      select: "active"
    },
    {
      link: "../../../assets/supermercados 1.svg",
      alt: "Image Supermarkets",
      text: "Supermercado"
    },
    {
      link: "../../../assets/bares.svg",
      alt: "Image Drinks",
      text: "Bebidas"
    },
    {
      link:"../../../assets/ferramentas 1.svg",
      alt:"Image Tools",
      text: "Ferramentas"
    },
    {
      link:"../../../assets/cuidados-de-saude 1.svg",
      alt:"Image Health",
      text: "Saúde"
    },
    {
      link:"../../../assets/corrida 1.svg",
      alt:"Images Sports and Fitness",
      text: "Esportes e Fitness"
    },
    {
      link: "../../../assets/moda 1.svg",
      alt: "Image Fashion",
      text: "Moda"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


}

export interface ProductCategory {
  link: string;
  alt: string;
  text: string;
  select?: string;
}
