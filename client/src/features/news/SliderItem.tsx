import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { Service, ServiceId } from '../service/types';
import './style/slider.css';
import { deleteOneService } from '../service/servicesSlice';
import ChangeServiceForm from '../service/ChangeServiceForm';
import { RootState } from '../../redux/store';

function SliderItem({ service }: { service: Service }): JSX.Element {
  const [modalActive, setModalActive] = useState(false);
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useDispatch();

  const onHandleRemove = (value: ServiceId): void => {
    dispatch(deleteOneService(value));
  };

  return (
    <div className="posts_slide_container">
      {/* <img className="post__img" src={post.img} alt="post" /> */}
      <h3 className='servicename'>{service.title}</h3>
      {/* <h2 className='scroll'>{service.text}</h2> */}
      {user && user.isAdmin && (
        <>
          {' '}
          <button onClick={() => onHandleRemove()} type="button">
            Удалить 
          </button>
          {modalActive && <ChangeServiceForm service={service} setModalActive={setModalActive} />}
          <button onClick={() => setModalActive(!modalActive)} type="button">
            Изменить 
          </button>
        </>
      )}
      <button className='btn' type="button">
        <Link to={`/services/${service.id}`}>Подробнее</Link>
      </button>
    </div>
  );
}

export default memo(SliderItem);
