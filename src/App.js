import './App.css'
import AdditionalStats from './components/additionalStats'
import Alert from './components/alert'
import Forecast from './components/forecast'
import LocationSearch from './components/locationSearch'
import TempInfo from './components/tempInfo'
import { roundNum } from './helpers/helpers'

import { useState, useEffect } from 'react'

const App = () => {
	const [weather, setWeather] = useState([])
	// const [location, setLocation] = useState('')
	let location = 30003

	const URL = `http://api.weatherapi.com/v1/forecast.json?key=d88a02f72fc847e8aea234600221002&q=${location}&days=6&alerts=yes`

	const getData = () => {
		fetch(URL)
			.then(res => res.json())
			.then(data => {
				setWeather(data)
			})
			.catch(e => console.log(e))
	}
	// console.log(weather.forecast.forecastday[0].day.mintemp_f)

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className='App flex flex-col justify-center h-screen gap-2 bg-gradient-to-b from-slate-900 to-slate-800 bg-no-repeat bg-cover text-stone-300 p-5 text-sm font-open md:h-full 2xl:h-screen'>
			<LocationSearch
			// locationVal={location}
			// eOnChange={e => setLocation(e.target.value)}
			// eOnKeyPress={searchLocation}
			/>
			<Alert />
			<TempInfo
				// city={weather.location.name}
				// state={weather.location.region}
				// country={weather.location.country}
				// lowTemp={roundNum(weather.forecast.forecastday[0].day.mintemp_f)}
				// highTemp={roundNum(weather.forecast.forecastday[0].day.maxtemp_f)}
				// currentTemp={roundNum(weather.current.temp_f)}
				// imgSrc={weather.current.condition.icon}
				// imgAlt={weather.current.condition.text}
				// conditions={weather.current.condition.text.toLowerCase()}
				// feelsLike={roundNum(weather.current.feelslike_f)}
				// sunrise={weather.forecast.forecastday[0].astro.sunrise.replace(/^0+/, '')}
				// sunset={weather.forecast.forecastday[0].astro.sunset.replace(/^0+/, '')}
			/>
			<AdditionalStats
				// windSpeed={roundNum(weather.current.wind_mph)}
				// windDirection={weather.current.wind_dir}
				// precipitation={weather.forecast.forecastday[0].day.totalprecip_in}
				// humidity={weather.current.humidity}
				// cloudCoverage={weather.current.cloud}
				// visibility={weather.current.vis_miles}
			/>
			<Forecast />
		</div>
	)
}

export default App
