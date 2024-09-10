import type {


  DoctorId,
  DoctorCard,
  } from '../types/types';
  
  

  // export async function fetchServices(): Promise<ServiceCard[]> {
  //   const res = await fetch('/api/services');
  //   return res.json();
  // }
  export const fetchDoctors = async (): Promise<DoctorCard[]> => {
    const res = await fetch('/api/doctors');
  
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    return res.json();
  };
  export const fetchAddDoctor= async (doctor: DoctorCard): Promise<DoctorCard> => {
    const res = await fetch('/api/doctors', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(doctor),
    });
    return res.json();
  }
  export const fetchDoctorChange=async(doctor: DoctorCard): Promise<DoctorCard> => {
    const res = await fetch(`/api/doctors/${doctor.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ title:doctor.title, img:doctor.img,  about: doctor.about, }),
    });
    return res.json();
  }
  export const fetchDoctorRemove = async (id: number): Promise<DoctorId> => {
    const res = await fetch(`/api/doctors/${id}`, {
      method: 'DELETE',
    });
    return res.json();
  };