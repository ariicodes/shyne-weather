const Alert = ({ alert, action }) => {
	return (
		<div
			className='flex flex-col self-center bg-red-900 w-screen md:w-[340px] text-center my-2 -mx-5 shadow-md py-1 xl:text-base hover:cursor-pointer'
			onClick={action}
		>
			{alert}
		</div>
	)
}

export default Alert
