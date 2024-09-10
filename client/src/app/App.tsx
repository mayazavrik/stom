import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";

/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "./App.css";


import SignIn from "../features/logreg/RegistrUser";
import { checkUser } from "../features/logreg/AuthSlice";
import { loadServices } from "../features/service/servicesSlice";
import MainPage from "../features/main/MainPage";
import NavBar from "../features/navbar/NavBar";
import ServicesPage from "../features/service/ServicesPage";

// import PersonalArea from "../features/personalArea/PersonalArea";
// import PersonalAreaAdmin from "../features/personalArea/PersonalAreaAdmin";
// import NewsBlock from "../features/news/NewsBlock";
import { loadPosts } from "../features/news/newsSlice";
import ServicePage from "../features/service/ServicePage";
import NewsPostPage from "../features/news/NewsPostPage";
import { useAppDispatch } from "../redux/store";
import { loadDoctors } from "../features/doctor/doctorSlice";
// import { loadPrices } from "../features/doctor/uslugaPriceSlice";
import { loadSales } from "../features/sales/salesSlice";
// import SalesPage from "../features/sales/SalesPage";

import ErrorPage from "../features/404/404";
import DoctorsPage from "../features/doctor/DoctorsPage";
// import SignIn from "../features/logreg/RegistrUser";
import DoctorPage from "../features/doctor/DoctorPage";

function App(): JSX.Element {
	// const [isPageClickable, setIsPageClickable] = useState(false);
	const dispatch = useAppDispatch();
	// const service = useSelector((store: RootState) => store.auth.service);

	useEffect(() => {
		dispatch(loadServices());
		dispatch(loadPosts());
	}, []);

	useEffect(() => {
		dispatch(checkUser());
		dispatch(loadDoctors());

		dispatch(loadServices());
		// dispatch(loadPrices());
		dispatch(loadSales());
	}, []);

	// useEffect(() => {
	// 	if (service?.isChecked === false) {
	// 		setIsPageClickable(false);
	// 	}
	// }, [service?.isChecked]);

	return (
		<div id="huge" >
			<Routes>
				<Route path="/" element={<NavBar />}>
					<Route path="/reg" element={<SignIn />} />
					<Route path="/" element={<MainPage />} />
					<Route path="/services" element={<ServicesPage />} />
					<Route path="/doctors" element={<DoctorsPage />} />
					<Route path="/doctors/:doctorId" element={<DoctorPage />} />
					<Route path="/services/:serviceId" element={<ServicePage />} />
					{/* <Route path="/news" element={<NewsBlock />} />
					<Route path="/sales" element={<SalesPage />} /> */}
					{/* <Route path="/personalArea" element={<PersonalArea />} /> */}
					{/* <Route path="/personalArea/admin" element={<PersonalAreaAdmin />} /> */}

					<Route path="/news/:postId" element={<NewsPostPage />} />
				</Route>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
