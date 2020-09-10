import { IskuRequest } from './sku.model';

export interface ICart {
    skus: IskuRequest[];
    totalAmount: number;
    totalDiscount: number;
    finalAmount: number;
    appliedPromo?: string;
}
