import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { addSales } from '../sales/salesSlice';

import './style/style.css';

export default function AddSaleForm(): JSX.Element {
  const [text, setText] = useState('');
  const [img, setImg] = useState('');
  const dispatch = useAppDispatch();

  const onHandleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addSales({ id: 1, img, text }));
    setText('');
    setImg('');
  };
  return (
    <div className="form__container">
      <form className="formsale" onSubmit={onHandleAdd}>
        <label className="form__label">
          Фото акции
          <input
            className="form__label"
            value={img}
            name="img"
            type="text"
            onChange={(e) => setImg(e.target.value)}
          />
        </label>
        <label className="form__label">
          Текст акции
          <input
            className="biginput"
            value={text}
            name="text"
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
