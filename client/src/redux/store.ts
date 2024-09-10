/* eslint-disable import/no-named-as-default */
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import AuthSlice from "../features/logreg/AuthSlice";
import servicesSlice from "../features/service/servicesSlice";
import newsSlice from "../features/news/newsSlice";

// import uslugaPriceSlice from "../features/doctor/uslugaPriceSlice";
import salesSlice from "../features/sales/salesSlice";
import PersonalSlice from "../features/personalArea/PersonalSlice";
import doctorSlice from "../features/doctor/doctorSlice";

const store = configureStore({
	reducer: {
		servicesSlice,
		news: newsSlice,
		auth: AuthSlice,

		doctorSlice: doctorSlice,
		// prices: uslugaPriceSlice,
		sales: salesSlice,
		adminArea: PersonalSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
