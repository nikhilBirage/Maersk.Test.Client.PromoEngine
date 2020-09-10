import { Component, OnInit } from '@angular/core';
import { Isku, IskuRequest } from '../shared/models/sku.model';
import { CheckoutService } from '../shared/services/checkout.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  skus: IskuRequest[] = [
    { name: 'A', rate: 50, skuQuantity: 0 },
    { name: 'B', rate: 30, skuQuantity: 0 },
    { name: 'C', rate: 20, skuQuantity: 0 },
    { name: 'D', rate: 15, skuQuantity: 0 }
  ];
  cartSkus: IskuRequest[] = [];

  constructor(private readonly checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.setCartsData();
  }

  addToCart(sku: IskuRequest) {
    this.checkoutService.addItemInCart(sku);
    this.setCartsData();
  }

  updateQuantity(sku: IskuRequest) {
    this.checkoutService.updateQuantity(sku);
    this.setCartsData();
  }

  setCartsData() {
    this.cartSkus = this.checkoutService.getCartItems();
    this.skus.forEach((ele) => {
      const cartSku = this.cartSkus.find(e => e.name === ele.name);
      if (cartSku) {
        ele.skuQuantity = cartSku.skuQuantity;
      }
    });
  }
}
