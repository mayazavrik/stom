
export type ServiceCard = {
  id: number;
  title: string;
  
  text: string;
  price:number;
 
};
export type ServiceId = ServiceCard['id'];

export type ServicesState = {
  services: ServiceCard[];
  error: string | null;
  loading: boolean;
  
};

export type Sale = {
  id: number;
  img: string;
  text: string;
};
export type SaleId = Sale['id'];
