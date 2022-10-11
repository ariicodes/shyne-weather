const TempInfo = ({
	city,
	state,
	country,
	lowTemp,
	highTemp,
	currentTemp,
	imgSrc,
	imgAlt,
	conditions,
	feelsLike,
	sunrise,
	sunset,
}) => {
	return (
		<div className='flex flex-col items-center self-center gap-2 w-screen px-6 mt-1 md:w-[390px]'>
			<p className='font-light italic text-center mb-4'>
				{city}, {state}, {country}
			</p>
			<div className='flex flex-row w-full justify-around'>
				<div className='flex flex-col items-start'>
					<p className='text-xs '>low</p>
					<p className='font-medium text-lg'>{lowTemp}º</p>
				</div>
				<div className='flex flex-col items-center'>
					<img
						width='64'
						height='64'
						src={`https:${imgSrc}`}
						alt={imgAlt}
					/>
					<h1 className='text-5xl font-bold'>{currentTemp}º</h1>
				</div>
				<div className='flex flex-col items-end'>
					<p className='text-xs '>high</p>
					<p className='font-medium text-lg'>{highTemp}º</p>
				</div>
			</div>
			<h2 className='text-base -mb-2'>{conditions}</h2>
			<p className='font-light text-sm '>feels like: {feelsLike}º</p>
			<div className='flex flex-row justify-between w-full px-2 text-xs'>
				<div className='flex flex-col items-start'>
					<p className=''>sunrise</p>
					<p className=''>{sunrise}</p>
				</div>
				<div className='flex flex-col items-end'>
					<p className=''>sunset</p>
					<p className=''>{sunset}</p>
				</div>
			</div>
		</div>
	)
}

export default TempInfo
