const AdditionalStats = ({
	windSpeed = '0',
	windDirection = 'NNW',
	precipitation = '0',
	humidity = '0',
	cloudCoverage = '0',
	visibility = '0',
}) => {
	return (
		<div className='flex flex-row gap-2 self-center justify-between rounded-xl bg-[rgba(255,255,255,0.03)] shadow-md p-6 mt-6 text-xs w-11/12 md:w-[370px]'>
			<div className='flex flex-col items-start gap-3'>
				<div>
					<p className='font-medium md:text-base'>wind speed</p>
					<p className='font-light md:text-base'>{windSpeed} mph</p>
				</div>
				<div>
					<p className='font-medium md:text-base'>wind direction</p>
					<p className='font-light md:text-base'>{windDirection}</p>
				</div>
				<div>
					<p className='font-medium md:text-base'>precipitation</p>
					<p className='font-light md:text-base'>{precipitation} in</p>
				</div>
			</div>
			<div className='flex flex-col items-end text-right gap-3'>
				<div>
					<p className='font-medium md:text-base'>humidity</p>
					<p className='font-light md:text-base'>{humidity}%</p>
				</div>
				<div>
					<p className='font-medium md:text-base'>cloud coverage</p>
					<p className='font-light md:text-base'>{cloudCoverage}%</p>
				</div>
				<div>
					<p className='font-medium md:text-base'>visibility</p>
					<p className='font-light md:text-base'>{visibility} mi</p>
				</div>
			</div>
		</div>
	)
}

export default AdditionalStats
