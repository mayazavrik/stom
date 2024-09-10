import React, { Dispatch, SetStateAction, useState } from 'react';
import './style/modal.css';
import { useAppDispatch } from '../../redux/store';
import {  changeDoctor} from './doctorSlice';

import { DoctorCard} from './types/types';

function ChangeDoctorForm({
  doctor,
  setModalActive,
}: {
  doctor: DoctorCard;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {

  const [title, setTitle] = useState(doctor?.title);
 
  const [about, setAbout] = useState(doctor?.about);
  const [img, setImg] = useState(doctor?.img);



  1;
  const dispatch = useAppDispatch();
  // const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   dispatch(addDoctor({ id: doctor.id,  title, img,  about}));
  //   setTitle("");

	// 	setAbout("");
  //   setImg("");

  
  // };
  const onHandleChange = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(changeDoctor({ id: doctor.id,  title, img, about }));
    setModalActive(false);
  };

  return (
    <div className='darkened'>
      <div className="modal active">
      <form className="modal-content active" onSubmit={onHandleChange}>
      <label className="form__label">
          Имя врача
          <input
            className="biginput"
            value={title}
            name="text"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="form__label">
					Фото врача
					<input
						className="biginput"
						value={img}
						name="text"
						type="text"
						onChange={(e) => setImg(e.target.value)}
					/>
				</label>
        <label className="form__label ">
          О враче
          <textarea
        
            className="biginput"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          
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

export default ChangeDoctorForm;
