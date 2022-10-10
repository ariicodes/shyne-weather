const AlertModal = ({ show, action, details = '< ==== No ALERTS! ==== >' }) => {
	if (!show) {
		return null
	}

	return (
		<div
			className='modal box-border flex flex-col self-center bg-slate-400 text-black p-4 text-right rounded-b-xl w-screen h-screen md:w-[390px] shadow-md xl:text-base z-50 overflow-y-scroll absolute'
			onClick={action}
		>
			<div
				className='modal-content'
				onClick={e => e.stopPropagation()}
			>
				<button
					className='bg-white shadow-md shadow-slate-500/50 text-slate-900 py-0.5 px-4 rounded-full font-black'
					onClick={action}
				>
					close
				</button>
				<div className='text-left'>{details}</div>
			</div>
		</div>
	)
}

export default AlertModal
