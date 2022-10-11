const Stat = ({ title, data, units }) => {
	return (
		<div>
			<p className='font-medium'>{title}</p>
			<p className='font-light'>
				{data}{units}
			</p>
		</div>
	)
}

const AdditionalStats = ({
	windSpeed,
	windDirection,
	precipitation,
	humidity,
	cloudCoverage,
	visibility,
}) => {
	return (
		<div className='flex flex-row gap-2 self-center justify-between rounded-xl bg-[rgba(255,255,255,0.03)] shadow-md p-6 mt-6 text-xs w-11/12 md:w-[340px]'>
			<div className='flex flex-col items-start gap-3'>
				<Stat 
				title={'wind speed'} 
				data={windSpeed} 
				units={' mph'}
				/>
				<Stat 
				title={'wind direction'} 
				data={windDirection} 
				/>
				<Stat 
				title={'precipitation'} 
				data={precipitation} 
				units={' in'}
				/>
			</div>
			<div className='flex flex-col items-end text-right gap-3'>
				<Stat 
				title={'humidity'} 
				data={humidity} 
				units={'%'}
				/>
				<Stat 
				title={'cloud coverage'} 
				data={cloudCoverage} 
				units={'%'}
				/>
				<Stat 
				title={'visibility'} 
				data={visibility} 
				units={' mi'}
				/>
			</div>
		</div>
	)
}

export default AdditionalStats
