import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../shared/services/checkout.service';
import { ICart } from '../shared/models/cart.model';
import { Isku, IskuRequest } from '../shared/models/sku.model';
import { PromotionService } from '../shared/services/promotion.service';
import { IPromotion } from '../shared/models/promotion.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: ICart;
  promotions: IPromotion[] = [];
  selectedPromo: string;
  error: string = '';

  constructor(
    private readonly checkoutService: CheckoutService,
    private readonly promotionService: PromotionService) { }

  ngOnInit(): void {
    this.getPromotions();
    this.calculateAndLoad();
  }

  removeFromCart(sku: IskuRequest) {
    this.checkoutService.removeItemFromCart(sku);
    this.calculateAndLoad();
  }

  calculatePromotion() {
    this.promotionService.calculatePromotion(this.selectedPromo, this.cart.skus).subscribe((amount) => {
      if (amount !== 0) {
        this.cart.finalAmount = amount;
        this.cart.totalDiscount = this.cart.totalAmount - this.cart.finalAmount;
      }

    }, (error) => {
      this.error = 'Error in calculation';
    });
  }

  private getPromotions() {
    this.promotionService.getPromotions().subscribe((promotions) => {
      this.promotions = promotions;
    }, (error) => {
      this.promotions = [];
    });
  }

  private calculateAndLoad() {
    this.checkoutService.calculateCartValues();
    this.cart = Object.assign({}, this.checkoutService.getCartData());
  }

}
