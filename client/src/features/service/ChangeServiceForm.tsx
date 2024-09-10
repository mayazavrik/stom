import React, { Dispatch, SetStateAction, useState } from 'react';
import './style/modal.css';
import { RootState, useAppDispatch } from '../../redux/store';
import { addService, changeService } from './servicesSlice';
import { useSelector } from 'react-redux';
import { ServiceCard} from './types/type';

function ChangeServiceForm({
  service,
  setModalActive,
}: {
    service: ServiceCard;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {

  const [title, setTitle] = useState(service?.title);
  const [text, setText] = useState(service?.text);
  const [price, setPrice] = useState(service?.price);
 

  1;
  const dispatch = useAppDispatch();
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addService({ id: service.id,  title,  text, price }));

    setText('');
    setTitle('');
    setPrice(0);
    
  };
  const onHandleChange = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(changeService({ id: service.id, title, text , price, }));
    setModalActive(false);
  };

  return (
    <div className='darkened'>
      <div className="modal active">
      <form className="modal-content active" onSubmit={onHandleChange}>
      <label className="form__label">
          Название услуги
          <input
            className="biginput"
            value={title}
            name="text"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
     
        <label className="form__label ">
          Текст услуги
          <textarea
         
            className="biginput"
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
          />
        </label>
        <label className="form__label">
          Цена за час
          <input
            className="biginput"
            value={price}
            name="text"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label className="form__label">
          Цена за полтора часа
          <input
            className="biginput"
            value={price}
            name="text"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button className="btn" type="submit">
          Сохранить изменения
        </button>
        <button onClick={() => setModalActive(false)} className="btn" type="button">
          Отмена
        </button>
      </form>
    </div>
    </div>
    
  );
}

export default ChangeServiceForm;
