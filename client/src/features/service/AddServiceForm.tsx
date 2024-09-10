import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { addSales, addService } from './servicesSlice';
import type { ServiceCard } from './types/type';
import './style/style.css';

export default function AddServiceForm({ service }: { service: ServiceCard }): JSX.Element {
    
    const [title, setTitle] = useState('');
  
  const [text, setText] = useState('');
  const [price, setPrice] = useState(0);

  const dispatch = useAppDispatch();

  const onHandleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addService({ id: 1,title, text , price}));
    setTitle('');
    setText('');
   
    setPrice(0);
   
  };
  return (
    <div className="form__container">
      <form className="formsale" onSubmit={onHandleAdd}>
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
      
        <label className="form__label">
          Текст услуги
          <input
            className="biginput"
            value={text}
            name="text"
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <label className="form__label">
          Цена за час
          <input
            className="biginput"
            value={price}
            name="text"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
       
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
