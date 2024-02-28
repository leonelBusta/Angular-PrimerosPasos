import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../productos/productos.mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  product?: Product;
  productsList: Product[] = productsList;
  loading: boolean = false;
  color: string= "";

  constructor(private _route: ActivatedRoute) { }
  ngOnInit(): void {
    setTimeout(() => {
    this._route.params.subscribe(params => {
      this.product = this.productsList.find(product => product.id == params['productId']);
      this.color = this.product?.Carrera as string == "DBA"? 'green' : '' ;
      console.log(this.product);
    });
    },1500);
  }
}
