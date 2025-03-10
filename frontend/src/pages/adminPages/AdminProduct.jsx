import React from 'react'
import AdminSideBar from '../../components/AdminSideBar'

const AdminProduct = () => {
  return (
    <div className="px-5 relative">
      <AdminSideBar />

      <section className='ml-60 p-4 pr-0 max-sm:ml-0 max-sm:p-0 max-sm:mt-4 transition-[0.5s]'>
        <h1 className='font-semibold'>Product</h1>
        <div className='bg-black/20 p-4 rounded-[8px] my-3'>
          <h4 className='font-semibold text-amber-600'>SMILE ONE COIN</h4>
          <p className='flex gap-3 items-center mb-3'>
            Brazil 
            <img className='h-5 w-5 object-cover rounded-[50%]' src="../../../public/img/brazil.png" alt="" />
          </p>

          {/* table */}
          <table className='w-[100%] max-sm:text-[0.8rem]'>
            <thead className='text-amber-600'>
              <tr className='h-10'>
                <th>Item</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            
            <tbody className='text-center'>
              <tr className='border-t border-white/20'>
                <td>30 BRL</td>
                <td>23</td>
                <td className='py-2'>
                  Rs. 470 <br />
                  <span className='text-amber-600'>(</span>
                    $4.35
                  <span className='text-amber-600'>)</span>
                </td>
                <td className='text-amber-600'>
                  <i className="fa-regular fa-pen-to-square"></i>
                </td>
              </tr>
              <tr className='border-t border-white/20'>
                <td>30 BRL</td>
                <td>23</td>
                <td className='py-2'>
                  Rs. 470 <br />
                  <span className='text-amber-600'>(</span>
                    $4.35
                  <span className='text-amber-600'>)</span>
                </td>
                <td className='text-amber-600'>
                  <i className="fa-regular fa-pen-to-square"></i>
                </td>
              </tr>
              <tr className='border-t border-white/20'>
                <td>30 BRL</td>
                <td>23</td>
                <td className='py-2'>
                  Rs. 470 <br />
                  <span className='text-amber-600'>(</span>
                    $4.35
                  <span className='text-amber-600'>)</span>
                </td>
                <td className='text-amber-600'>
                  <i className="fa-regular fa-pen-to-square"></i>
                </td>
              </tr>
              <tr className='border-t border-white/20'>
                <td>30 BRL</td>
                <td>23</td>
                <td className='py-2'>
                  Rs. 470 <br />
                  <span className='text-amber-600'>(</span>
                    $4.35
                  <span className='text-amber-600'>)</span>
                </td>
                <td className='text-amber-600'>
                  <i className="fa-regular fa-pen-to-square"></i>
                </td>
              </tr>
              <tr className='border-t border-white/20'>
                <td>30 BRL</td>
                <td>23</td>
                <td className='py-2'>
                  Rs. 470 <br />
                  <span className='text-amber-600'>(</span>
                    $4.35
                  <span className='text-amber-600'>)</span>
                </td>
                <td className='text-amber-600'>
                  <i className="fa-regular fa-pen-to-square"></i>
                </td>
              </tr>
            </tbody>
          </table>


          {/* table body */}
          {/* <div className='flex justify-between'>
            <p>Item</p>
            <p>Stock</p>
            <p>Price</p>
            <p>Action</p>
          </div>
          <div className='flex justify-between items-center border-t border-white/20 py-2 mt-2'>
            <p>30 BRL</p>
            <p>23</p>
            <p>Rs. 0 <br />
              <span className='text-amber-400'>(</span>
                $0
              <span className='text-amber-400'>)</span>
            </p>
            <button className='text-amber-400'>
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          </div>
          <div className='flex justify-between items-center border-t border-white/20 py-2 mt-2'>
            <p>30 BRL</p>
            <p>23</p>
            <p>Rs. 470 <br />
              <span className='text-amber-400'>(</span>
                $4.35
              <span className='text-amber-400'>)</span>
            </p>
            <button className='text-amber-400'>
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          </div>
          <div className='flex justify-between items-center border-t border-white/20 py-2 mt-2'>
            <p>30 BRL</p>
            <p>23</p>
            <p>Rs. 470 <br />
              <span className='text-amber-400'>(</span>
                $4.35
              <span className='text-amber-400'>)</span>
            </p>
            <button className='text-amber-400'>
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          </div> */}
          
        </div>

      </section>
    </div>
  )
}

export default AdminProduct