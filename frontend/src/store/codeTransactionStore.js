import { create } from "zustand";
import axios from "axios";

// const API_URL = import.meta.env.MODE === "development" ? "http://localhost:8080/api/auth" : "/api/auth";
const API_URL = "http://localhost:8080/api/codeTransaction";


axios.defaults.withCredentials = true;

export const useCodeTransactionStore = create((set) => ({
	cart: [],
	order: [],
 	message: null,

	// get all cart items
  fetchCart: async (user_id) => {
		try {
			const response = await axios.get(`${API_URL}/cart?user_id=${user_id}`);
			set({ cart: response.data.cart, message: response.data.message});
		} catch (error) {
			set({ error: error.response.data.message || "Error fetchCart"});
			throw error;
		}
	},

	// add items to cart
	addToCart: async (user_id, variant_id, qty) => {
		try {
			const response = await axios.post(`${API_URL}/cart`, { user_id, variant_id, qty });
			
			set({ message: response.data.message});
		} catch (error) {
			set({ error: error.response.data.message || "Cart can't update."});
			throw error;
		}
	},

	// remove item from cart
	removeCart: async (user_id, variant_id) => {
		try {
			const response = await axios.delete(`${API_URL}/cart`, {
				params: { user_id, variant_id },
			})
			set({ cart: response.data.cart })
		} catch (error) {
			console.log("abc");
			
			set({ error: error.response.data.message || "Cart can't remove."});
			throw error;
		}
	}

}));
