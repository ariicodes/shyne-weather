const Forecast = ({ forecast }) => {
    return (
			<div className='flex flex-row self-center justify-between mt-8 px-6 w-screen md:w-[390px]'>
				{forecast}
			</div>
		)
}

export default Forecast