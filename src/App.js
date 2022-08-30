import {Header, About, History, Team, Testimonials, Footer} from './containers'
import {CTA, Navbar} from './components'

import './App.css'

function App() {
	return (
		<div>
			<div className='gradient__bg'>
				<Navbar />
				<Header/>
				<About/>
				<Testimonials/>
				<CTA/>
				<History/>
				<Footer/>
			</div>
		</div>
	)
}

export default App
