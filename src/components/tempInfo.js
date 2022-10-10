const TempInfo = ({
	city = 'Washington',
	state = 'District of Columbia',
	country = 'USA',
	lowTemp = 68,
	highTemp = 85,
	currentTemp = 70,
	imgSrc = '//cdn.weatherapi.com/weather/64x64/day/176.png',
	imgAlt = 'icon',
	conditions = 'raining',
	feelsLike = 70,
	sunrise = '6:30 AM',
	sunset = '8:30 PM',
}) => {
	return (
		<div className='flex flex-col items-center self-center gap-2 w-screen px-6 md:w-[390px]'>
			<p className='font-light italic text-center'>
				{city}, {state}, {country}
			</p>
			<div className='flex flex-row w-full justify-around'>
				<div className='flex flex-col items-start'>
					<p className='text-xs xl:text-base'>low</p>
					<p className='font-medium text-lg xl:text-2xl'>{lowTemp}º</p>
				</div>
				<div className='flex flex-col items-center'>
					<img
						src={`http:${imgSrc}`}
						alt={imgAlt}
					/>
					<h1 className='text-5xl font-bold xl:text-7xl'>{currentTemp}º</h1>
				</div>
				<div className='flex flex-col items-end'>
					<p className='text-xs xl:text-base'>high</p>
					<p className='font-medium text-lg xl:text-2xl'>{highTemp}º</p>
				</div>
			</div>
			<h2 className='text-base xl:text-xl'>{conditions}</h2>
			<p className='font-light text-sm xl:text-lg'>feels like: {feelsLike}º</p>
			<div className='flex flex-row justify-between w-full px-2 text-xs xl:text-base'>
				<div className='flex flex-col items-start'>
					<p className='xl:text-lg'>sunrise</p>
					<p className='xl:text-lg'>{sunrise}</p>
				</div>
				<div className='flex flex-col items-end'>
					<p className='xl:text-lg'>sunset</p>
					<p className='xl:text-lg'>{sunset}</p>
				</div>
			</div>
		</div>
	)
}

export default TempInfo
