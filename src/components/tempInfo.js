const TempInfo = (props) => {
    return (
			<div className='flex flex-col items-center self-center gap-2 w-screen px-6 md:w-[390px]'>
				<p className='font-light italic'>
					{props.city}, {props.state}, {props.country}
				</p>
				<div className='flex flex-row w-full justify-around'>
					<div className='flex flex-col items-start'>
						<p className='text-xs xl:text-base'>low</p>
						<p className='font-medium text-lg xl:text-2xl'>{props.lowTemp}º</p>
					</div>
					<div className='flex flex-col items-center'>
						<img
							src=''
							alt=''
						/>
						<h1 className='text-5xl font-bold xl:text-7xl'>
							{props.currentTemp}º
						</h1>
					</div>
					<div className='flex flex-col items-end'>
						<p className='text-xs xl:text-base'>high</p>
						<p className='font-medium text-lg xl:text-2xl'>{props.highTemp}º</p>
					</div>
				</div>
				<h2 className='text-base xl:text-xl'>{props.conditions}</h2>
				<p className='font-light text-sm xl:text-lg'>
					feels like: {props.feelsLike}º
				</p>
				<div className='flex flex-row justify-between w-full px-2 text-xs xl:text-base'>
					<div className='flex flex-col items-start'>
						<p className='xl:text-lg'>sunrise</p>
						<p className='xl:text-lg'>{props.sunrise} AM</p>
					</div>
					<div className='flex flex-col items-end'>
						<p className='xl:text-lg'>sunset</p>
						<p className='xl:text-lg'>{props.sunset} PM</p>
					</div>
				</div>
			</div>
		)
}

export default TempInfo