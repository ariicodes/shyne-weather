const AdditionalInfo = () => {
    return (
			<div className='flex flex-row gap-2 self-center justify-between rounded-xl bg-[rgba(255,255,255,0.03)] shadow-md p-6 mt-6 text-xs w-screen md:w-[390px]'>
				<div className='flex flex-col items-start gap-3'>
					<div>
						<p className='font-medium md:text-base'>wind speed</p>
						<p className='font-light md:text-base'>0 mph</p>
					</div>
					<div>
						<p className='font-medium md:text-base'>wind direction</p>
						<p className='font-light md:text-base'>north</p>
					</div>
					<div>
						<p className='font-medium md:text-base'>precipitation</p>
						<p className='font-light md:text-base'>0 in</p>
					</div>
				</div>
				<div className='flex flex-col items-end text-right gap-3'>
					<div>
						<p className='font-medium md:text-base'>humidity</p>
						<p className='font-light md:text-base'>0%</p>
					</div>
					<div>
						<p className='font-medium md:text-base'>cloud coverage</p>
						<p className='font-light md:text-base'>0%</p>
					</div>
					<div>
						<p className='font-medium md:text-base'>visibility</p>
						<p className='font-light md:text-base'>0 mi</p>
					</div>
				</div>
			</div>
		)
}

export default AdditionalInfo