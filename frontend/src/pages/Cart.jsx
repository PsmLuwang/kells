import { useState, useEffect } from "react";
import axios from "axios";

function Cart() {

	const [cartProducts, setCartProducts] = useState([])
	const fectchCart = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/cart`);
      setCartProducts(response.data);
    } catch (error) {
      console.log("Error fetching variants:", error);
    }
  }
  useEffect(() => {
    fectchCart()
  })
	const remove = async (id) => {
    try {
			await axios.delete(`http://localhost:8080/cart/${id}`);
    } catch (error) {
      console.log("Error fetching variants:", error);
    }
  }

	
	const findTotal = {
		totalINR: parseFloat(cartProducts.reduce((acc, current) => 
			acc + parseFloat(current.priceINR) * parseFloat(current.qty)
		,0).toFixed(2)),
		totalUSDT: parseFloat(cartProducts.reduce((acc, current) => 
			acc + parseFloat(current.priceUSDT) * parseFloat(current.qty)
		,0).toFixed(2))
	}
	
	
	return (
		<>
			<h4 className="text-center text-red-500 font-bold">
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
				{cartProducts.map((item, index) => (
					<div key={index} className="flex justify-between items-center gap-3">
						<div className="flex-1">
							<p className="text-red-500 font-semibold">
								{item.typeName}
							</p>
							<p>{item.name}</p>
						</div>
						<p>{item.qty}</p>
						<button id={index} className="bg-red-500 px-2 rounded-[4px] h-8"
							onClick={() => remove(item.id)}
						>
							Remove
						</button>
					</div>
				))}
			</section>

			<section className="flex justify-between bg-black/20 w-[calc(100%-40px)] max-w-200 mx-auto p-3 my-5 text-[0.85rem] font-bold rounded-[10px] border border-[#ffffff2c]">
				<h4>Total Amount</h4>
				<h4>Rs. {findTotal.totalINR} <span className="text-white/50">(${findTotal.totalUSDT})</span></h4>
			</section>

			<button className="bg-red-500 text-[0.9rem] font-medium w-[calc(100%-40px)] max-w-200 block mx-auto h-8 rounded-[6px] mb-5"
				onClick={() => remove("all")}
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