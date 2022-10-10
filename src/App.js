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
		const URL = `http://api.weatherapi.com/v1/forecast.json?key=d88a02f72fc847e8aea234600221002&q=${location}&days=6&alerts=yes`
		console.log(URL)
		fetch(URL)
			.then(res => res.json())
			.then(data => {
				setWeather(data)
			})
			.catch(e => console.log(e))
	}, [location])

	const handleLocationChange = event => {
		console.log(event.target.value)
		setLocation(event.target.value)
	}

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
				<AlertModal
					action={() => setShow(false)}
					show={show}
				/>
				<div className='flex flex-col justify-center z-40'>
					<LocationSearch
						val={location}
						submit={handleSubmit}
						searchChange={handleLocationChange}
					/>
					<Alert />
					<TempInfo />
					<AdditionalStats />
					<Forecast />
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
								<h3 className='font-black text-lg pt-4'>{d.headline}</h3>
								<h4 className='font-medium uppercase text-lg text-center pt-4'>
									Affected Areas:
								</h4>
								<ul className='grid grid-cols-2 gap-1 pb-10 text-sm'>
									{d.areas.split(';').map(a => (
										<li>{a}</li>
									))}
								</ul>
								<p className='italic'>{d.desc}</p>
								<p className='font-bold text-red-800 text-center pb-4'>
									{d.instruction}
								</p>
								<hr />
							</>
						)
					})}
					action={() => setShow(false)}
					show={show}
				/>
				<div className='flex flex-col justify-center z-40'>
					<LocationSearch
						val={location}
						submit={handleSubmit}
						searchChange={handleLocationChange}
					/>
					<Alert
						alert={
							<>
								{weather.alerts.alert.length < 1 ? (
									''
								) : (
									<div>
										{weather.alerts.alert.map(d => (
										<p className='text-xs'>{trunc(d.headline)}...</p>
										))}
										<p>Click to read more!</p>
									</div>
								)}
							</>
						}
						action={() => setShow(true)}
					/>
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
					forecast={
						weather.forecast.forecastday.map(day => {
							<div className='flex flex-col items-center'>
								<p className='font-medium pb-1'>{getDayName(day.date)}</p>
								<img
									src={`http:${day.day.condition.icon}`}
									alt='weather icon'
								/>
								<p className='font-bold pt-1'>{day.day.maxtemp_f}º</p>
								<p className='font-light'>{day.day.mintemp_f}º</p>
							</div>
						})
					}
					/>
				</div>
			</div>
		)
	}
}

export default App
