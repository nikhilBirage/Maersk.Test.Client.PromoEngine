export interface Isku {
    name: string;
    rate: number;
}

export interface IskuRequest extends Isku {
    skuQuantity: number;
}