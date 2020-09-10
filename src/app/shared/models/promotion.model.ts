export interface IPromotion {
    promoId: string;
    promotionName: string;
    promoSKUs: string[];
    numberOfSKUItems: number;
    fixedPrice: number;
    discountPerUnitPrice: number;
    prmotionTypeId: string;
}

export interface IPromotionType {
    id: string;
    ruleName: string;
}