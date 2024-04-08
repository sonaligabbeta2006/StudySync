import { configureStore } from "@reduxjs/toolkit";

import AuthSliceReducer from "./Slices/AuthSlice";
import CourseSliceReducer from "./Slices/CourseSlice";
import StatReducer from "./Slices/StatSlice";
import RazorpayReducer from "./Slices/RazorpaySlice";
import LecturesReducer from "./Slices/LectureSlice";

const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    course: CourseSliceReducer,
    razorpay: RazorpayReducer,
    lecture:LecturesReducer,
    stat:StatReducer,
  },
  devTools: true,
});
export default store;
