import React from 'react'
import './history.css'
import historyImage from '../../assets/history-image.webp'

const History = () => {
	return (
		<div className='westernsattel__possibility section__padding' id='geschichte'>
			<div className='westernsattel__possibility-image'>
				<img src={historyImage} alt='possibility' />
			</div>
			<div className='westernsattel__possibility-content'>
				<h4>
				
				</h4>
				<h1 className='gradient-text'>	Seit 28 Jahren Jahren züchten wir in der Oberpfalz Pferde der Reinen
					Spanischen Rasse</h1>
				<p>
					J.v.G. Saddle Innovations ist ein Familienunternehmen - bereits seit 1999
					werden unter der Marke Iberosattel eigene Sättel entwickelt. Die
					Inspiration dafür war unser eigenes Gestüt. Seit mehr als 28 Jahren züchten
					wir auf dem Privatgestüt Möningerberg in der Oberpfalz, Pferde der Reinen
					Spanischen Rasse. Die ersten Sättel sind, für die Rasse typisch, spanische
					Sättel sowie Sättel aus der klassischen – barocken – Reitweise.
				</p>
			</div>
		</div>
	)
}

export default History
