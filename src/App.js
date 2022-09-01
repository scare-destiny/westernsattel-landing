import {Header, About, History, Testimonials, Footer} from './containers'
import {CTA, Navbar} from './components'

import './App.css'

function App() {
	return (
		<div>
			<div className='gradient__bg'>
				<Navbar />
				<Header />
				<About />
				<CTA />
				<History />
				<Testimonials />
				<Footer />
			</div>
		</div>
	)
}

export default App
