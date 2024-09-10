import React, { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { addDoctor } from "./doctorSlice";
// import type { DoctorCard } from "./types/types";
import "./style/style.css";

export default function AddDoctorForm(): JSX.Element {
	const [title, setTitle] = useState("");
	const [about, setAbout] = useState("");

  const [img, setImg] = useState("");

	const dispatch = useAppDispatch();

	const onHandleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		dispatch(addDoctor({ id: 1, title,img, about }));
		setTitle("");
	
		setAbout("");
    setImg("");
	};
	return (
		<div className="form__container">
			<form className="formsale" onSubmit={onHandleAdd}>
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
				<label className="form__label">
					О враче
					<input
						className="biginput"
						value={about}
						name="text"
						type="text"
						onChange={(e) => setAbout(e.target.value)}
					/>
				</label>

				<button type="submit">Отправить</button>
			</form>
		</div>
	);
}
