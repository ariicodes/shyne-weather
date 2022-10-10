const Alert = ({ alert, action }) => {
	return (
		<div
			className='flex flex-col self-center bg-red-900 w-screen md:w-[390px] text-center my-6 -mx-5 shadow-md xl:text-base hover:cursor-pointer'
			onClick={action}
		>
			{alert}
		</div>
	)
}

export default Alert
