import './App.css'
import AdditionalInfo from './components/additionalInfo'
import Alert from './components/alert'
import Forecast from './components/forecast'
import LocationSearch from './components/locationSearch'
import TempInfo from './components/tempInfo'

const App = () => {
  return (
		<div className='App flex flex-col justify-center gap-2 h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-stone-300 p-5 text-sm font-open'>
			<LocationSearch />
			<Alert />
			<TempInfo
				city={'Washington'}
				state={'DC'}
				country={'US'}
				lowTemp={68}
				currentTemp={70}
				highTemp={85}
				conditions={'raining'}
				feelsLike={70}
				sunrise={'6:30'}
				sunset={'8:30'}
			/>
			<AdditionalInfo />
			<Forecast />
		</div>
	)
}

export default App
