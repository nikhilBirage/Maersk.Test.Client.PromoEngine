import { Injectable } from '@angular/core';
import { IPromotion, IPromotionType } from '../models/promotion.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Isku, IskuRequest } from '../models/sku.model';

@Injectable({
    providedIn: 'root'
})
export class PromotionService {
    // private promotions: IPromotion[] = [
    //     {
    //         promoId: 'DECD43EB-0C69-4D73-9A9E-81EDEB44A0EA',
    //         promotionName: '3 of A\'s for 130',
    //         promoSKUs: ['A'],
    //         fixedPrice: 130,
    //         numberOfSKUItems: 3,
    //         discountPerUnitPrice: 0,
    //         prmotionTypeId: '6CDD519A-7C10-4634-BFF0-5F7415F2DEE0'
    //     },
    //     {
    //         promoId: 'BF02A17D-61EE-421B-B5DD-367FDF53AB76',
    //         promotionName: '2 of B\'s for 45',
    //         promoSKUs: ['A'],
    //         fixedPrice: 45,
    //         numberOfSKUItems: 2,
    //         discountPerUnitPrice: 0,
    //         prmotionTypeId: '6CDD519A-7C10-4634-BFF0-5F7415F2DEE0'
    //     },
    //     {
    //         promoId: '76F8E5E4-D287-4C43-98C8-A72DB163DFCB',
    //         promotionName: 'C & D for 30',
    //         promoSKUs: ['C', 'D'],
    //         fixedPrice: 30,
    //         numberOfSKUItems: 0,
    //         discountPerUnitPrice: 0,
    //         prmotionTypeId: '11E36682-C713-4D67-8E56-DC5B540BF928'
    //     }
    // ];

    // private promotionTypes: IPromotionType[] = [
    //     {
    //         id: '6CDD519A-7C10-4634-BFF0-5F7415F2DEE0',
    //         ruleName: 'FixedPricePerNSKUItmes'
    //     },
    //     {
    //         id: '11E36682-C713-4D67-8E56-DC5B540BF928',
    //         ruleName: 'FixedPriceForMoreThanOneSKUs'
    //     }
    // ];
    private baseUrl = 'http://localhost:50856/';
    constructor(private readonly httpClient: HttpClient) { }

    public calculatePromotion(promoId: string, skus: IskuRequest[]): Observable<any> {
        const promotionRequest = {
            Skus: skus,
            PromotionId: promoId
        };
        console.log('req ', promotionRequest);
        const url = this.baseUrl + 'api/promotions/calculate-promotion';
        const headers = { 'content-type': 'application/json; charset=utf-8' };
        return this.httpClient.post(url, promotionRequest, { headers });
    }

    public getPromotions(): Observable<IPromotion[]> {
        const url = this.baseUrl + 'api/promotions';
        return this.httpClient.get<IPromotion[]>(url);
    }

}
