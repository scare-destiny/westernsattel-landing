import React from 'react'
import './marquee.css'
import image1 from '../../assets/gallery1.webp'
import image2 from '../../assets/gallery2.webp'
import image3 from '../../assets/gallery3.webp'
import image4 from '../../assets/gallery4.webp'
import image5 from '../../assets/gallery5.webp'

const Marquee = () => {
	return (
		<>
			<div className='marquee'>
				<div className='marquee__group'>
					<img src={image1} alt='beautiful horse' />
					<img src={image2} alt='beautiful horse' />
					<img src={image3} alt='beautiful horse' />
					<img src={image4} alt='beatiful horse' />
					<img src={image5} alt='beatiful horse' />
				</div>
				<div aria-hidden='true' className='marquee__group'>
					<img src={image1} alt='beatiful horse' />
					<img src={image2} alt='beatiful horse' />
					<img src={image3} alt='beatiful horse' />
					<img src={image4} alt='beatiful horse' />
					<img src={image5} alt='beatiful horse' />
				</div>
			</div>
		</>
	)
}

export default Marquee
