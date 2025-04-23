import React from 'react'
import AdminSideBarIcon from '../../components/AdminSideBarIcon'
import AdminSideBar from '../../components/AdminSideBar'


const AdminUsers = () => {
  return (
    <>
      <AdminSideBarIcon />

      <section className="px-[15px] relative">
        <AdminSideBar/>

        <main className='ml-60 p-4 pr-0 max-sm:ml-0 max-sm:p-0 max-sm:mt-4 transition-[0.5s]'>
          <h1 className='font-semibold'>Users Details</h1>

          <section className='grid gap-2 mt-3'>
            <div className='grid grid-cols-[3fr_1fr_1fr] bg-orange-400 p-2 rounded-[6px] text-black'>
              <p>Name</p>
              <p className='text-center'>Order</p>
              <p>Spent</p>
            </div>

            {/* render this to display user details */}
            <div className='grid grid-cols-[3fr_1fr_1fr] bg-black/20 p-2 rounded-[6px]'>
              <div>
                <p>Salam Priyansu Meitei</p>
                <p className='text-[0.8rem] font-extralight text-white/70'>spriyansumeitei@gmail.com</p>
              </div>
              <p className='text-center'>13</p>
              <div>
                <p>Rs 13000</p>
                <p className='text-[0.8rem] font-light text-white/70'>($140)</p>
              </div>
            </div>
            <div className='grid grid-cols-[3fr_1fr_1fr] bg-black/20 p-2 rounded-[6px]'>
              <div>
                <p>Salam Priyansu Meitei</p>
                <p className='text-[0.8rem] font-extralight text-white/70'>spriyansumeitei@gmail.com</p>
              </div>
              <p className='text-center'>13</p>
              <div>
                <p>Rs 13000</p>
                <p className='text-[0.8rem] font-light text-white/70'>($140)</p>
              </div>
            </div>
          </section>

         
        </main>
      </section>
    </>
  )
}

export default AdminUsers