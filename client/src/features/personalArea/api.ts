/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable import/prefer-default-export */

import type { Service } from '../LogReg/type';

export const fetchUpdatePhoto = async (
  obj: Service,
): Promise<{ message: string; service: Service }> => {
  const res = await fetch(`/api/service/person/${obj.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  return data;
};

export const fetchUpdateStatus = async (
  id: Service,
): Promise<{ message: string; service: Service }> => {
  const res = await fetch(`/api/service/person/status/${id}`, {
    method: 'put',
  });
  const data = await res.json();
  return data;
};
// export const fetchServiceRemove = async (id: number): Promise<ServiceId> => {
//   const res = await fetch(`/api/services/${id}`, {
//     method: 'DELETE',
//   });
//   return res.json();
// };
// export const fetchDeleteOne = async (id: Service): Promise<{ message: string; id: number }> => {
//   const res = await fetch(`/api/service/person/delete/${id}`, {
//     method: 'delete',
//   });

//   const data = await res.json();
//   console.log(data);

//   return data;
// };
export const fetchDeleteOneDoctor = async (id: number): Promise<DoctorId> => {
  const res = await fetch(`/api/doctors/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
export const fetchDeleteOneService = async (id: number): Promise<ServiceId> => {
  const res = await fetch(`/api/services/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};