import React, { memo, useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./style/style.css";
import ChangeDoctorForm from "./ChangeDoctorForm";
import type { RootState } from "../../redux/store";
import { deleteDoctor, deleteOneDoctor} from "./doctorSlice";
import { DoctorCard } from "./types/types";

export default function DoctorItem({ doctor }: { doctor: DoctorCard }): JSX.Element {
	const [modalActive, setModalActive] = useState(false);
	const user = useSelector((store: RootState) => store.auth.user);
	const dispatch = useDispatch();
	const onHandleRemove = (): void => {
		// dispatch(deleteDoctor(doctor.id));
		dispatch(deleteOneDoctor(doctor.id));
	};
	return (
		<div className="service-card">
			<h3 className="servicename">{doctor.title}</h3>
			<br />
			<h4 className="itemrow">
			<img className="serviceimg" src={doctor.img} alt="servicePhoto" />
			</h4>
			<h4 className="itemrow">
				<p className="iteminfo">{doctor.about}</p>
			</h4>

			{user && user.isAdmin && (
				<>
					{" "}
					<button onClick={() => onHandleRemove()} type="button">
						Удалить врача
					</button>
					{modalActive && <ChangeDoctorForm doctor={doctor} setModalActive={setModalActive} />}
					<button onClick={() => setModalActive(!modalActive)} type="button">
						Изменить врача
					</button>
				</>
			)}
			<button className="btn" type="button">
				<Link to={`/doctors/${doctor.id}`}>Подробнее</Link>
			</button>

			{/* <button  className='btn' type="button">
        <Link to={`/services/${service.id}`}>Подробнее</Link>
      </button> */}
		</div>
	);
}
