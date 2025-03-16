import { useState, useEffect } from "react";
import { useAuthStore } from "../store/authStore.js";
import { useCodeTransactionStore } from "../store/codeTransactionStore.js";

function Cart() {

	const { user } = useAuthStore()
	const { fetchCart, cart, message, removeCart } = useCodeTransactionStore();

	useEffect(() => {
		const handleFetchCart = async () => {
			try {
				await fetchCart(user._id)
			} catch (error) {
				console.log(error);
			}
		}

		handleFetchCart()
	}, [fetchCart, cart])

	// const [cartProducts, setCartProducts] = useState([])
	
	// const findTotal = {
	// 	totalINR: parseFloat(cartProducts.reduce((acc, current) => 
	// 		acc + parseFloat(current.priceINR) * parseFloat(current.qty)
	// 	,0).toFixed(2)),
	// 	totalUSDT: parseFloat(cartProducts.reduce((acc, current) => 
	// 		acc + parseFloat(current.priceUSDT) * parseFloat(current.qty)
	// 	,0).toFixed(2))
	// }
	
	return (
		<>
			<h4 className="text-center text-red-500 font-bold mt-4">
				Items in Your Cart
			</h4>

			{/* cart table */}
			<section className="flex flex-col gap-4 bg-black/20 w-[calc(100%-40px)] max-w-200 mx-auto p-3 my-5 text-[0.9rem] rounded-[10px] border border-[#ffffff2c]">

				<div className="flex justify-between gap-3 mb-3 font-semibold">
					<h5 className="flex-1">Product</h5>
					<h5>Qty.</h5>
					<h5 className="px-2">Remove</h5>
				</div>

				{/* cart render */}
				{cart.map((item, index) => (
					<div key={index} className="flex justify-between items-center gap-3">
						<div className="flex-1">
							<p className="text-red-500 font-semibold">
								{item.typeName}
							</p>
							<p>{item.variantName}</p>
						</div>
						<p>{item.qty}</p>
						<button id={index} className="bg-red-500 px-2 rounded-[4px] h-8"
							onClick={() => removeCart(user._id, item.variant_id)}
						>
							Remove
						</button>
					</div>
				))}
			</section>

			<section className="flex justify-between bg-black/20 w-[calc(100%-40px)] max-w-200 mx-auto p-3 my-5 text-[0.85rem] font-bold rounded-[10px] border border-[#ffffff2c]">
				<h4>Total Amount</h4>
				<h4>Rs. {} <span className="text-white/50">(${})</span></h4>
			</section>

			<button className="bg-red-500 text-[0.9rem] font-medium w-[calc(100%-40px)] max-w-200 block mx-auto h-8 rounded-[6px] mb-5"
				onClick={() => removeCart(user._id, "all")}
			>
				Clear Cart
			</button>
			<button className="bg-[#ff9500] text-black text-[0.9rem] font-medium w-[calc(100%-40px)] max-w-200 block mx-auto h-8 rounded-[6px] mb-5">
				Proceed to checkout
			</button> 
		</>
	)
}

export default Cart