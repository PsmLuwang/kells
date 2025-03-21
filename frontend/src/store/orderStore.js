import { create } from "zustand";
import axios from "axios";

// const API_URL = import.meta.env.MODE === "development" ? "http://localhost:8080/api/auth" : "/api/auth";
const API_URL = "http://localhost:8080/api/record";


axios.defaults.withCredentials = true;

export const useOrderStore = create((set) => ({
	orders: [],
	myCodes: [],

	// get all orders 
	viewOrders: async (user_id) => {
		try {
			const response = await axios.get(`${API_URL}/order?user_id=${user_id}`);
			set({ orders: response.data.orders});
		} catch (error) {
			set({ error: error.response.data.message || "Error viewOrders"});
			throw error;
		}
	},

}));
