import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useCodeStore } from '../store/codeStore.js'


function Products() {

  const { id } = useParams();
  
  const {fetchVariants, types, variants} = useCodeStore();
  
  const handleFetchVariants = async (id) => {
    try {
      await fetchVariants(id)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    handleFetchVariants(id);
    console.log(types);
    
  }, [id])


  const [formatedVariants, setFormatedVariants] = useState(
    variants.map((element) => {return {...element, qty: 0}})
  );

  
  // update the quantities of listed codes 
  const selectingItems = (index, action) => {
    action === "add" ? formatedVariants[index].qty ++ : 
    action === "remove" && formatedVariants[index].qty > 0 ? formatedVariants[index].qty -- : 
    formatedVariants[index].qty
    
    setFormatedVariants([...formatedVariants])
  }

  // const addToCart = async (variant, qty) => {
  //   try {
  //     const cart = {
  //       variant: variant,
  //       qty: qty,
  //     }
  //     const response = await axios.post('http://localhost:8080/cart', cart);
  //     console.log(response.data);
  //     setVariants((prev) => 
  //       prev.map((item) => (item.id === variant ? {...item, qty:0}: item))
  //     );
  //   } catch (error) {
  //     console.error('Error posting data:', error);
  //   }
  // };
  

  return (
    <>
      {/* hero section */}
      <div className='w-[calc(100%-40px)] mx-auto mt-4 flex gap-[15px] border border-[#ffffff2c] rounded-[10px] bg-black/20'>
        <img className='w-[100px] h-[130px] object-cover rounded-l-[9px]' 
          src={types[0].img} alt="" 
        />
        <div>
          <h4 className='text-red-500 mt-[10px] font-bold'>
            {types[0].name}
          </h4>
          <p>
            {types[0].region} 
            <img className='h-[20px] w-[20px] object-cover rounded-[50%]'
              src={types[0].flag} alt="" 
            />
          </p>
        </div>
      </div>

      {/* product render */}
      <h4 className='text-center text-red-500 font-bold my-5'>Add Products to Your Cart</h4>
      <section className='grid sm:grid-cols-2 grid-cols-1 gap-3 max-w-200 mx-auto px-5'>
        {
          formatedVariants.map((variant, index) => (
            <div key={index} className='bg-black/20 rounded-[10px] p-3'>
              <h4 className='text-red-500 font-semibold'>{variant.coin} {types[0].name}</h4>
              <p>{variant.name} <span className='text-emerald-500'>({variant.stock} codes left)</span></p>
              <p>Rs {variant.priceINR}/- (${variant.priceUSDT})</p>
              <div className='flex justify-center gap-3 mt-3'>
                <button className='text-[0.8rem] bg-amber-500 text-black flex-1 rounded-[4px]'
                  onClick={() => {addToCart(variant.id, variant.qty)}}
                >
                  Add to Cart
                  <i className="fa-solid fa-cart-shopping ml-2"></i>
                </button>
                <div className='flex gap-[10px]'>
                  <button className='bg-[#f2f2f22d] w-6 rounded-full border border-[#545454]'
                    onClick={() => selectingItems(index, "remove")}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <p>{variant.qty}</p>
                  <button className='bg-[#f2f2f22d] w-6 rounded-full border border-[#545454]'
                    onClick={() => selectingItems(index, "add")}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </section>

      {/* link to redirect to cart page */}
      <Link to={"/cart"} className='bg-green-600 flex justify-center items-center w-[calc(100%-40px)] mx-auto my-5 max-w-190 rounded-[4px] text-[0.8rem] h-8'>
        Go to Cart
        <i className="fa-solid fa-cart-shopping ml-2"></i>
      </Link>
    </>
  )
}



export default Products