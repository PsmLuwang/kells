import { Link } from 'react-router-dom'
import '../css/Home.css'
import { useState, useEffect } from 'react'
import axios from 'axios'



function Home() {

	const [types, setTypes] = useState([])
  const fectchAPI = async (path) => {
    const response = await axios.get(`http://localhost:8080${path}`);
    setTypes(response.data)
  }
  useEffect(() => {
    fectchAPI("/")
  },[])


	return (
		<>
			<div>
				<img className='hero' src="../public/img/hero1.png" alt="" />
			</div>
			<section className="products">
				<h3 className='my-5'>Our Products</h3>
				<div className='productsWrapper'>
					{
						types.map((element, index) => (
							<Link to={`/products/${element._id}`} key={index}>
								<div
									style={{
										background: `url(${element.img})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
									}}
								>
									<div className='hanger'><div></div></div>
									
									<h4>{element.name}</h4>
									<p>
										{element.region}
										<img src= {element.flag} alt="" />
									</p>
								</div>
							</Link>
						))
					}
				</div>
			</section>

			<section className='help'>
					<h3 className='my-5'>Need help ?</h3>
					<h4>Frequently asked question :</h4>
					<p>How to order?</p>
					<p>How to check my redeem codes?</p>
					<p>How report problem?</p>
			</section>

			<section className='why'>
				<h4 className='my-5'>Why choose Slim Kells?</h4>
				<div>
					<div>
						<i className="fa-solid fa-truck-fast"></i>
						<p>Instant delivery</p>
					</div>
					<div>
						<i className="fa-solid fa-microchip"></i>
						<p>24/7 services</p>
					</div>
					<div>
						<i className="fa-solid fa-shield-halved"></i>
						<p>High security</p>
					</div>
					<div>
						<i className="fa-solid fa-tag"></i>
						<p>Cheapest</p>
					</div>
				</div>
			</section>

			<footer>
				<h4 className='my-5'>Follow us:</h4>
				<div>
					<a href="#"><i className="fa-brands fa-instagram"></i></a>
					<a href="#"><i className="fa-brands fa-square-facebook"></i></a>
					<a href="#"><i className="fa-brands fa-youtube"></i></a>
					<a href="#"><i className="fa-brands fa-twitter"></i></a>
				</div>
				<h4 className='my-5'>Contact</h4>
				<p>www.slimkellscode.com</p>
				<p>slimkellsredeemcode@gmail.com</p>
				<p>Itanagar, Arunachal Pradesh, 791112 | India</p>
				<p>Web Developer | Salam Priyansu Meitei</p>
				
				<section className="logo">
					<img src="../../public/img/logo.png" alt="" />
					<div>
					<p>Slim Kells</p>
					<p>Reedem Codes</p>
					</div>
				</section>
			</footer>
		</>
	)
}

export default Home