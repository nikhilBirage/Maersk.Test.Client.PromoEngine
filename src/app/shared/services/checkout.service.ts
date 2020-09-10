import { Injectable } from '@angular/core';
import { ICart } from '../models/cart.model';
import { Isku, IskuRequest } from '../models/sku.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private cartData: ICart = {
    skus: [],
    finalAmount: 0,
    totalAmount: 0,
    totalDiscount: 0
  };

  public getCartData() {
    return this.cartData;
  }

  public getCartItems() {
    return this.cartData.skus;
  }

  public addItemInCart(addedSku: IskuRequest) {
    if (addedSku) {

      const filteredSku = this.cartData.skus.find(sku => sku.name === addedSku.name);
      if (!filteredSku) {
        this.cartData.skus.push(addedSku);
      }
    }
  }

  public updateQuantity(addedSku: IskuRequest) {
    if (addedSku) {

      const filteredSku = this.cartData.skus.find(sku => sku.name === addedSku.name);
      if (filteredSku) {
        this.cartData.skus.find(sku => sku.name === addedSku.name).skuQuantity = addedSku.skuQuantity;
      }
    }
  }

  public removeItemFromCart(removedSku: IskuRequest) {
    if (removedSku) {
      const skuIndex = this.cartData.skus.findIndex(sku => sku.name === removedSku.name);
      if (skuIndex >= 0) {
        this.cartData.skus.splice(skuIndex, 1);
      }
    }
  }

  public calculateCartValues() {
    let totalRateAmount = 0;
    this.cartData.skus.forEach(ele => {
      totalRateAmount += ele.rate * ele.skuQuantity;
    });
    this.cartData.totalAmount = totalRateAmount;
    this.cartData.finalAmount = totalRateAmount;
  }

}
