import AdminSideBar from '../../components/AdminSideBar'
import Chart from '../../components/Chart'
import Graph from '../../components/Graph'
const AdminDashboard = () => {
  return (
    <section className="px-5 relative">
      {/* nav bar */}
      <AdminSideBar />
      
      {/* main */}
      <section className="ml-60 p-4 pr-0">
        <h1 className='font-semibold'>Dashboard</h1>
        <section className="grid grid-cols-4 gap-x-4 mt-3 h-40">
          <div className="bg-linear-to-bl from-[#ff6666] to-[#e4b780] rounded-[8px] p-4 font-bold text-[1.2rem]">
            <p className="text-[0.8rem] mb-5 font-medium">Total Revenue</p>
            <h4>Rs. 4000.59</h4>
            <h4>$ 50.68</h4>
          </div>
          <div className="bg-linear-to-bl from-[#0f6aa7] to-[#72b2dd] rounded-[8px] p-4 font-bold text-[1.2rem]">
            <p className="text-[0.8rem] mb-5 font-medium">Total Orders</p>
            <h4>23 Orders</h4>
            <h4></h4>
          </div>
          <div className="bg-linear-to-bl from-[#008161] to-[#34d698] rounded-[8px] p-4 font-bold text-[1.2rem]">
            <p className="text-[0.8rem] mb-5 font-medium">Total Users</p>
            <h4>17</h4>
            <h4></h4>
          </div>
          <div className="bg-linear-to-bl from-[#e47b02] to-[#ffb560] rounded-[8px] p-4 font-bold text-[1.2rem]">
            <p className="text-[0.8rem] mb-5 font-medium">Available Stocks</p>
            <h4>Rs. 4000.59</h4>
            <h4>$ 50.68</h4>
          </div>
        </section>

        <section className='flex gap-4 my-4'>
          <div className='bg-black/20 flex-1 rounded-[8px]'>
            <Graph />
          </div>
          <div className='bg-black/20 rounded-[8px]'>
            <Chart />
          </div>
        </section>
      </section>
    </section>
  )
}
// text-[#ff6666]

export default AdminDashboard