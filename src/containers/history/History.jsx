import React from 'react'
import './history.css'
import historyImage from '../../assets/history-image.webp'

const History = () => {
	return (
		<div className='westernsattel__possibility section__padding' id='possibility'>
			<div className='westernsattel__possibility-image'>
				<img src={historyImage} alt='possibility' />
			</div>
			<div className='westernsattel__possibility-content'>
				<h4>Unsere Westernsattelmodelle</h4>
				<h1 className='gradient-text'>Das Besondere</h1>
				<p>
					Auch Jahre nach Kauf, zum Beispiel bei einem Wechsel des Pferdes, können
					Sie Ihren Westernsattel wieder neu anpassen.Alle LUXARY Sättel werden
					individuell gefertigt - per Hand in Deutschland
				</p>
				<h4>Preisliste runter laden</h4>
			</div>
		</div>
	)
}

export default History
