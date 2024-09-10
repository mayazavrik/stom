import React from 'react';
import type { Service } from '../logreg/type';
import { useAppDispatch } from '../../redux/store';
import { deleteOneService,  } from '../service/servicesSlice';

function ServicesItemAdmin({ servic }: { servic: Service }): JSX.Element {
  const dispatch = useAppDispatch();



  const onHandeldeleteService = (): void => {
    dispatch(deleteOneService(servic.id));
  };

  return (
    <div className='adminItem'
      
    >
      <div className='itemrow'>
        
        <p className='iteminfo'>{servic?.title}</p></div>
      <div className='itemrow'>
      
      {/* <p className='iteminfo'>
      <img className="serviceimg" src={servic.img} alt="servicePhoto" /></p> */}
       </div>
      <div className='itemrow'>
      
       <p className='iteminfo'>{servic?.text}</p>  </div>
    
 
      <button className='btn'
       
        onClick={() => onHandeldeleteService()}
        type="submit"
      >
        Удалить услугу
      </button>
    </div>
  );
}

export default ServicesItemAdmin;
