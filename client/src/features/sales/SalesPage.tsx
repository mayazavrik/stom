// /* eslint-disable @typescript-eslint/no-unsafe-call */
// import React from 'react';
// import { useSelector } from 'react-redux';
// import SaleItem from './SaleItem';
// import './style/style.css';
// // import pic from '../../images//17.png';
// // import AddNewsForm from '../admin/AddNewsForm';
// import type { RootState } from '../../redux/store';
// // import spinner from '../../assets/Spinner-1s-200px.svg';
// import AddSaleForm from '../service/AddSaleForm';

// function SalesPage(): JSX.Element {
//   const sales = useSelector((store: RootState) => store.sales.sales);
//   const error = useSelector((store: RootState) => store.sales.error);
//   const loading = useSelector((store: RootState) => store.sales.loading);
//   const user = useSelector((store: RootState) => store.auth.user);
//   const checkError = <h1 style={{ color: 'red' }}>{error}</h1>;
//   // const spin = <img src={spinner} alt="preloader" />;
//   const city = useSelector((store: RootState) => store.sales.city);

//   return (
//     <div className="containerSaleForm">
//        {user && user.isAdmin && (  <AddSaleForm /> )}
   
// {/* <img src={pic} alt='img'/> */}
//       <div className="sales">
//         <div className="sales__container">
//           {sales.map((sale) =>
           
//               <SaleItem key={sale.id} sale={sale} />
           
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SalesPage;
