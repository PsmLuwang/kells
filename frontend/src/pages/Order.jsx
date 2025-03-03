import React from 'react'

const Order = () => {

  const data = [
    {
      orderID: '78342685',
      status: 'Success',
      date: '12th-Jan-2025',
      payment: 'UPI',
      items: [
        {
          name: "Smile One Coin",
          value: "100 BRL",
          qty: "5",
          priceINR: "1550",
          priceUSDT: "17.05"
        },
        {
          name: "Smile One Coin",
          value: "500 BRL",
          qty: "2",
          priceINR: "7550",
          priceUSDT: "85.35"
        },
      ]
    },
    {
      orderID: '78342687',
      status: 'Success',
      date: '13th-Jan-2025',
      payment: 'Binance',
      items: [
        {
          name: "Smile One Coin",
          value: "100 BRL",
          qty: "3",
          priceINR: "1550",
          priceUSDT: "17.05"
        },
        {
          name: "Smile One Coin",
          value: "500 BRL",
          qty: "1",
          priceINR: "7550",
          priceUSDT: "85.35"
        },
        {
          name: "MooGold",
          value: "1500 INR",
          qty: "2",
          priceINR: "1490",
          priceUSDT: "16.07"
        },
      ]
    }
  ]

  // find the total amount for each order
  const findTotal = (index) => {
    let totalINR = data[index].items.reduce((start, current) => {
      return start + parseFloat(current.priceINR) * parseFloat(current.qty)
    }, 0);
    let totalUSDT = data[index].items.reduce((start, current) => {
      return start + parseFloat(current.priceUSDT) * parseFloat(current.qty)
    }, 0);
    return {totalINR, totalUSDT}
  }

  return (
    <section className="w-[calc(100%-40px)] max-w-200 mx-auto flex flex-col gap-2 mb-5">
      {/* filter section */}
      <div className="flex flex-col gap-2 mb-3">
        <div className="flex gap-2 h-8">
          <input className="bg-black/20 border border-[#ffffff2c] flex-1 rounded-[4px] text-blac px-3 outline-0 min-w-20"
            type="text" name="" id="" placeholder="Search by Order ID"
          />
          <button className="w-[30%] bg-amber-500 rounded-[4px] font-semibold text-[0.8rem] text-black">Search</button>
        </div>
        <div className="flex justify-around max-sm:flex-col gap-1.5">
          <input className="bg-amber-100 flex-1 px-3 rounded-[4px] text-black outline-0 min-h-8"
            type="date" name="" id="" 
          />
          <p className="mx-3 text-center">to</p>
          <input className="bg-amber-100 flex-1 px-3 rounded-[4px] text-black outline-0 min-h-8" 
            type="date" name="" id="" 
          />
        </div>
      </div>

      {/* render the orders */}
      {data.map((order, index) => (
        <div key={index} className="bg-black/20 rounded-[8px] border border-[#ffffff2c] flex flex-col gap-y-2 text-[0.8rem]">
          {/* order id and status */}
          <div className='flex justify-between py-2 px-3 bg-amber-500 font-semibold text-black rounded-t-[8px]'>
            <p>{order.orderID}</p>
            <p>{order.status}</p>
          </div>
          {/* each items in the order details */}
          <div className='px-3 flex flex-col gap-1.5'>
            {order.items.map((item, index) => (
              <div key={index} className='flex justify-between'>
                <div>
                  <p>{item.name}</p>
                  <p>{item.value} * {item.qty} units</p>
                </div>
                <div>
                  <p>Rs. {item.priceINR}/unit</p>
                </div>
              </div>
            ))}
          </div>
          {/* total and order details at the bottom */}
          <div className='flex justify-between border-t border-[#ffffff2c] rounded-b-[8px]'>
            <div className='py-1.5 px-3 text-[0.7rem]'>
              <p>Payment: {order.payment}</p>
              <p>Order Date: {order.date}</p>
            </div>
            <div className='bg-[#ffffff2c] flex flex-col justify-center items-center text-left min-w-[20%] rounded-br-[8px] px-3 font-semibold text-[0.7rem]'>
              <p>Rs.{findTotal(index).totalINR}/-</p>
              <p>(${findTotal(index).totalUSDT})</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Order