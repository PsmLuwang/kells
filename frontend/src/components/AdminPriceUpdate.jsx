import React from 'react'

const AdminPriceUpdate = () => {
  return (
    <div className='bg-gray-900 flex flex-col gap-3 w-[calc(100%-60px)] max-w-[400px] absolute left-[50%] top-[200px] translate-x-[-50%] text-center p-5 rounded-[8px] z-2'>
      <h1 className='text-amber-600 font-semibold'>Update Price</h1>
      <input className='bg-white/20 rounded-[4px] p-2'
        type="number"
        placeholder='price (INR)'
      />
      <input className='bg-white/20 rounded-[4px] p-2'
        type="number"
        placeholder='price (USDT)'
      />

      <button className='bg-amber-600 p-2 rounded-[4px] font-semibold'>
        Update
      </button>
    </div>
  )
}

export default AdminPriceUpdate