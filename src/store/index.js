import { configureStore } from "@reduxjs/toolkit";

import authStore from "./auth";
import counterStore from "./counter";

const store = configureStore({
    reducer: {
        counter: counterStore,
        auth: authStore,
    },
});

export default store;
