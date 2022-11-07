export interface ICataloge {
    image: string;
    name: string;
}

export interface IClientProfileItem {
    totalLimit: number;
    storeName: string;
    catalogs: ICataloge[]; 
}