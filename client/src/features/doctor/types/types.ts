
export type DoctorCard = {
  id: number;
  img: string;
  title: string;
  about: string;
};
export type DoctorId = DoctorCard['id'];

export type DoctorsState = {
  doctors: DoctorCard[];
  error: string | null;
  loading: boolean;
  
};
