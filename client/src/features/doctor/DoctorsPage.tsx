import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import DoctorItem from './DoctorItem';
import './style/style.css';
import AddDoctorForm from './AddDoctorForm';


export default function DoctorsPage(): JSX.Element {
  
  const doctors = useSelector((store: RootState) =>  store.doctorSlice.doctors)
  const user = useSelector((store: RootState) => store.auth.user);
  // const error = useSelector((store: RootState) => store.servicesSlice.error);
  // const loading = useSelector((store: RootState) => store.servicesSlice.loading);

//   return (
//     <div className="containerPostForm">
// {user && user.isAdmin && (
//       <AddDoctorForm />)}

//       {/* <div className="swiper"> */}
//         <div className="posts__container">
//           {doctors?.map((doctor) => <DoctorItem key={doctor.id} doctor={doctor} />)}
//         </div>

//         {/* <div className="swiper-pagination"></div>

//         <div className="swiper-button-prev"></div>
//         <div className="swiper-button-next"></div>

//         <div className="swiper-scrollbar"></div> */}
//       {/* </div> */}
//     </div>
//   );
return (
  <>
    {user && user.isAdmin && (
      <AddDoctorForm />
    )}

    <div className="posts__container">
      {doctors?.map((doctor) => <DoctorItem key={doctor.id} doctor={doctor} />)}
    </div>
  </>
);

}

