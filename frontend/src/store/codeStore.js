import { create } from "zustand";
import axios from "axios";

// const API_URL = import.meta.env.MODE === "development" ? "http://localhost:8080/api/auth" : "/api/auth";
const API_URL = "http://localhost:8080/api/code";


axios.defaults.withCredentials = true;

// NEED TO MANAGE STATES 
export const useCodeStore = create((set) => ({
	types: [],
	variants: [],
	codes: [],


	fetchTypes: async () => {
		try {
			const response = await axios.get(`${API_URL}/types`);
			set({ types: response.data.types});
		} catch (error) {
			set({ error: error.response.data.message || "Error fetchTypes"});
			throw error;
		}
	},


	fetchVariants: async (id) => {
		try {
			const response = await axios.get(`${API_URL}/variants/?id=${id}`);
			set({ types: response.data.type, variants: response.data.variants});
		} catch (error) {
			set({ error: error.response.data.message || "Error fetchVariants"});
			throw error;
		}
	}
}));
