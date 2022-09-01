import React from 'react'
import {Feature, MarqueeReversed} from '../../components'
import Marquee from '../../components/marqueese/Marquee'
import './about.css'

const About = () => {
	return (
		<div className='westernsattel__about section__margin' id='über-uns'>
			<div className='westernsattel__about-feature'>
				<Feature
					title='Über uns'
					text='J.v.G. Saddle Innovations ist ein Familienunternehmen - bereits seit 1999 werden unter der Marke Iberosattel eigene Sättel entwickelt.'
				/>
			</div>
			<div className='westernsattel__about-heading'>
				<h1 className='gradient__text'>JvG Saddle Innovations</h1>
			</div>
			<div className='westernsattel__about-container'>
				<Feature
					title='Individuelle Anpassung und Fertigung'
					text='Das Ergebnis: Ein technisch innovativer, von Hand gefertigter und individuell an Sie angepasster Sattel'
				/>
				<Feature
					title='Handmade in unserer  Manufaktur'
					text='Schon seit 1999 fertigen wir Sättel für passionierte und professionelle Reiter'
				/>
				<Feature
					title='Immer wieder neu anpassbar'
					text='Alle von uns gefertigten Sättel können sie jederzeit neu auf Ihr Pferd anpassen lassen'
				/>
			</div>
			<div className='container-marquee'>
				<Marquee />
				<MarqueeReversed />
			</div>
		</div>
	)
}

export default About
