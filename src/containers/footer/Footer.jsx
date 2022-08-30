import React from 'react'
import './footer.css'
import westernsattelLogo from '../../assets/logo.webp'

const Footer = () => {
	return (
		<div className='westernsattel__footer section__padding'>
			<div className='westernsattel__footer-heading'>
				<h1 className='gradient__text'>
					Möchten Sie Ihren Traum-Westernsattel bekommen?
				</h1>
			</div>
			<div className='westernsattel__footer-btn'>
				<p>Preisliste runter laden</p>
			</div>

			<div className='westernsattel__footer-links'>
				<div className='westernsattel__footer-links_logo'>
					<img src={westernsattelLogo} alt='logo' />

				</div>
				<div className='westernsattel__footer-links_div'>
					<h4>Links</h4>
					<p>Overons</p>
					<p>Social Media</p>
					<p>Counters</p>
					<p>Contact</p>
				</div>
				<div className='westernsattel__footer-links_div'>
					<h4>Company</h4>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
					<p>Contact</p>
				</div>
				<div className='westernsattel__footer-links_div'>
					<h4>Kontakt</h4>
					<p>Crechterwoord K12 182 DK Alknjkcb</p>
					<p>085-132567</p>
					<p>info@payme.net</p>
				</div>
			</div>
			<div className='westernsattel__footer-copyright'>
				<p>© 2022 J. v. G. Saddle Innovations UG (Haftungsbeschränkt. All Rights Reserved</p>
			</div>
		</div>
	)
}

export default Footer
