/* eslint-disable no-nested-ternary */
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import type { RootState } from "../../redux/store";

import "./style/style.css";

export default function DoctorPage(): JSX.Element {
	const { doctorId } = useParams();
	const navigate = useNavigate();
	const doctors = useSelector((store: RootState) => store.doctorSlice.doctors);
	const doctor = doctors.find((doctor) => doctorId && doctor.id === +doctorId);

	console.log(doctorId);
	console.log();
	const error = <h1>Такого врача нет</h1>;
	const content = (
		<div className="services-page">
			<div className="post-page">
				<div className="servicename">{doctor?.title}</div>
				<img className="post-page__img" src={doctor?.img} alt="post" />

				<p className="post-page__text">{doctor?.about}</p>
			</div>
			<button className='backBtn' onClick={() => navigate(-1)} type="button">
				Назад к списку услуг
			</button>
		</div>
	);
	return <div className="services-page__container">{!doctor ? error : content}</div>;
}
