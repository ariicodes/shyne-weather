import './App.css'
import LocationSearch from './components/locationSearch'
import Alert from './components/alert'
import AlertModal from './components/alertModal'
import TempInfo from './components/tempInfo'
import AdditionalStats from './components/additionalStats'
import Forecast from './components/forecast'
import { roundNum, trunc, getDayName } from './helpers/helpers'
import { useState, useEffect, useCallback } from 'react'

const mainStyling =
	'App flex flex-col md:justify-center h-screen gap-2 bg-gradient-to-b from-slate-900 to-slate-800 bg-no-repeat bg-cover text-stone-300 p-5 text-sm font-open relative overflow-y-scroll'

const App = () => {
	const [weather, setWeather] = useState(null)
	const [location, setLocation] = useState('')
	const [show, setShow] = useState(false)

	const handleSubmit = useCallback(() => {
		const URL = `https://api.weatherapi.com/v1/forecast.json?key=d88a02f72fc847e8aea234600221002&q=${location}&days=8&alerts=yes`
		fetch(URL)
			.then(res => res.json())
			.then(data => {
				setWeather(data)
			})
			.catch(e => console.log(e))
	}, [location])

	const handleLocationChange = event => setLocation(event.target.value)

	useEffect(() => {
		const keyHandler = event => {
			if (event.key === 'Enter') {
				handleSubmit()
			}
		}

		document.addEventListener('keydown', keyHandler)

		return () => {
			document.removeEventListener('keydown', keyHandler)
		}
	}, [handleSubmit])
	if (!weather) {
		return (
			<div className={mainStyling}>
				<div className='flex flex-col justify-center z-40 text-center absolute inset-0'>
					<h1 className='text-4xl font-black mb-4'>Welcome to Shyne Weather</h1>
					<LocationSearch
						val={location}
						submit={handleSubmit}
						searchChange={handleLocationChange}
					/>
					<img
						width='80'
						height='80'
						className='self-center mt-4'
						src='https://cdn.weatherapi.com/weather/64x64/day/113.png'
						alt='sun icon'
					/>
				</div>
			</div>
		)
	} else {
		return (
			<div className={mainStyling}>
				<AlertModal
					details={weather.alerts.alert.map(d => {
						return (
							<>
								<h3 className='font-black text-base pt-4'>{d.headline}</h3>
								{d.areas.length < 1 ? (
									''
								) : (
									<h4 className='font-medium uppercase text-lg pt-4'>
										Affected Areas:
									</h4>
								)}
								<ul className='grid grid-cols-2 gap-1 pb-8 text-sm'>
									{d.areas.split(';').map(a => (
										<li>{a}</li>
									))}
								</ul>
								<p className='italic text-sm'>{d.desc}</p>
								<p className='font-bold text-red-800 text-center py-4'>
									{d.instruction}
								</p>
								<hr />
							</>
						)
					})}
					action={() => setShow(false)}
					show={show}
				/>
				<div className='flex flex-col justify-center z-40 absolute inset-0'>
					<LocationSearch
						val={location}
						submit={handleSubmit}
						searchChange={handleLocationChange}
					/>
					{weather.alerts.alert.length < 1 ? null : (
						<Alert
							alert={
								<div>
									{weather.alerts.alert.map(d => (
										<p className='text-xs'>{trunc(d.headline)}...</p>
									))}
									<p className='text-sm'>Click to read more!</p>
								</div>
							}
							action={() => setShow(true)}
						/>
					)}
					<TempInfo
						city={weather.location.name}
						state={weather.location.region}
						country={weather.location.country}
						lowTemp={roundNum(weather.forecast.forecastday[0].day.mintemp_f)}
						highTemp={roundNum(weather.forecast.forecastday[0].day.maxtemp_f)}
						currentTemp={roundNum(weather.current.temp_f)}
						imgSrc={weather.current.condition.icon}
						imgAlt={weather.current.condition.text}
						conditions={weather.current.condition.text.toLowerCase()}
						feelsLike={roundNum(weather.current.feelslike_f)}
						sunrise={weather.forecast.forecastday[0].astro.sunrise.replace(
							/^0+/,
							''
						)}
						sunset={weather.forecast.forecastday[0].astro.sunset.replace(
							/^0+/,
							''
						)}
					/>
					<AdditionalStats
						windSpeed={roundNum(weather.current.wind_mph)}
						windDirection={weather.current.wind_dir}
						precipitation={weather.forecast.forecastday[0].day.totalprecip_in}
						humidity={weather.current.humidity}
						cloudCoverage={weather.current.cloud}
						visibility={weather.current.vis_miles}
					/>
					<Forecast
						forecast={weather.forecast.forecastday.map(day => {
							return (
								<div className='flex flex-col items-center'>
									<p className='font-medium pb-1'>{getDayName(day.date)}</p>
									<img
										width='28'
										height='28'
										src={`https:${day.day.condition.icon}`}
										alt='weather icon'
									/>
									<p className='font-bold pt-1'>
										{roundNum(day.day.maxtemp_f)}º
									</p>
									<p className='font-light text-white/50'>
										{roundNum(day.day.mintemp_f)}º
									</p>
								</div>
							)
						})}
					/>
				</div>
			</div>
		)
	}
}

export default App
