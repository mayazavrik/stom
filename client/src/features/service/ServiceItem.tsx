import React, { memo, useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { ServiceCard } from './types/type';
import './style/style.css';
import ChangeServiceForm from './ChangeServiceForm'
import type { RootState } from '../../redux/store';
import { deleteOneService } from './servicesSlice';


export default function ServiceItem({ service }: { service: ServiceCard }): JSX.Element {
  const [modalActive, setModalActive] = useState(false);
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useDispatch();
  const onHandleRemove = (): void => {
    dispatch(deleteOneService(service.id));
  };

  return (
    <div className="service-card">
      <h3 className='servicename'>{service.title}</h3>
      <h3 className='servicename'>От {service.price}</h3>
      <br />
      {/* <img className="serviceimg" src={service.img} alt="servicePhoto" /> */}
      <h4 className='itemrow'>
    
     
      </h4>
    
      {user && user.isAdmin && (
        <>
          {' '}
          <button onClick={() => onHandleRemove()} type="button">
            Удалить услугу
          </button>
          {modalActive && <ChangeServiceForm service={service} setModalActive={setModalActive} />}
          <button onClick={() => setModalActive(!modalActive)} type="button">
            Изменить услугу
          </button>
        </>
      )}
      <button className='btn' type="button">
      <Link to={`/services/${service.id}`}>Подробнее</Link>
      </button>

      {/* <button  className='btn' type="button">
        <Link to={`/services/${service.id}`}>Подробнее</Link>
      </button> */}
    </div>
  );
}
