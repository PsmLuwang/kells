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

			const data = response.data.orders;

			const orders = data.map(order => {
				const date = new Date(order.createdAt);
	
				const formattedDate = `
					${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(date.getDate())} 
					(${padZero(date.getHours() % 12 || 12)}:${padZero(date.getMinutes())} 
					${date.getHours() < 12 ? 'AM' : 'PM'})
				`;
	
				return {...order, createdAt: formattedDate}
				
			});

			function padZero(num) {
				return num.toString().padStart(2, '0');
			}
			set({ orders });
		} catch (error) {
			set({ error: error.response.data.message || "Error viewOrders"});
			throw error;
		}
	},

}));
