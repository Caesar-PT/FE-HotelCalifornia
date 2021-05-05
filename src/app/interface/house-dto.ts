export interface HouseDTO {
    id?:number;
    name?:string;
    bedRoom?:number;
    bathRoom?:number;
    description?:string;
    priceMinDay?:number;
    priceMaxDay?:number;
    houseType?:string;
    houseStatus?:string;
    village?:string;
    appUser?: string;
    avatar?:string;
    province?:string;
    district?:string;
    address?:string;
}
