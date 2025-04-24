// import { create } from "zustand";
// import axios from "axios";


// // const API_URL = import.meta.env.MODE === "development" ? "http://localhost:8080/api/auth" : "/api/auth";
// const API_URL = "http://localhost:8080/api/admin";


// axios.defaults.withCredentials = true;

// export const useCodeStore = create((set) => ({
// 	types: [],
// 	variants: [], 
// 	codes: [],
// 	message: null,

// 	// get all types 
// 	fetchTypes: async () => {
// 		try {
// 			const response = await axios.get(`${API_URL}/types`);
// 			set({ types: response.data.types});
// 		} catch (error) {
// 			set({ error: error.response.data.message || "Error fetchTypes"});
// 			throw error;
// 		}
// 	},

// 	// get all variants with the corresponding type
// 	fetchVariants: async (id) => {
// 		try {
// 			const response = await axios.get(`${API_URL}/variants/?id=${id}`);
// 			set({ types: response.data.type, variants: response.data.variants});
// 		} catch (error) {
// 			set({ error: error.response.data.message || "Error fetchVariants"});
// 			throw error;
// 		}
// 	},

// 	priceUpdate: async (variant_id, priceINR, priceUSDT) => {
// 		try {
// 			const response = await axios.post(`${API_URL}/variants/priceUpdate`, {variant_id, priceINR, priceUSDT});
// 			set({ message: response.data.message });
// 		} catch (error) {
// 			set({ error: error.response.data.message || "Error priceUpdate"});
// 			throw error;
// 		}
// 	}
// }));
