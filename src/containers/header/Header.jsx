import hero from '../../assets/hero-image.webp'
import './header.css'

const Header = () => {
	return (
		<div className='westernsattel__header section__padding' id='home'>
			<div className='westernsattel__header-content'>
				<h1 className='gradient__text'>
				Westernsattel leicht, kurz, verstellbar
				</h1>
				<p>
					J.v.G. Saddle Innovations - Bei uns bekommen Sie Ihren Traum-Westernsattel.
					Perfekt angepasst an Sie und Ihr Pferd mit patentiertem EQUISCAN
					Messsystem.
				</p>
				<div className='westernsattel__header-content__input'>
					<input type='email' placeholder='Trage hier desine beste E-Mail Adresse ein...'></input>
					<button type='button'>Preisliste laden</button>
				</div>
			</div>
			<div className='westernsattel__header-image'>
				<img src={hero} alt='running horses' />
			</div>
		</div>
	)
}

export default Header
