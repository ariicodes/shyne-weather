import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const LocationSearch = ({ submit, val, searchChange }) => {
	const magGlass = <FontAwesomeIcon icon={faMagnifyingGlass} />

	return (
		<div className=''>
			<form
				onSubmit={event => {
					event.preventDefault()
					submit()
                    event.target.reset()
				}}
				className='flex flex-row justify-center items-center gap-3 font-light'
			>
				<input
					value={val}
					onChange={searchChange}
					type='text'
					name='location'
					className='rounded-xl bg-[rgba(255,255,255,0.2)] border-white border-[1.5px] text-center placeholder:text-xs placeholder:italic pb-0.5'
					placeholder='enter zipcode or city'
				/>
				<p className='text-xs xl:text-sm'>units:</p>
				<input
					type='radio'
					name='units'
					id='imperial'
					className='h-2.5 w-2.5 -mr-1 xl:h-3 xl:w-3'
				/>
				<label
					htmlFor='imperial'
					className='text-[.5rem] xl:text-xs'
				>
					imperial
				</label>
				<input
					type='radio'
					name='units'
					id='metric'
					className='h-2.5 w-2.5 -mr-1 xl:h-3 xl:w-3'
				/>
				<label
					htmlFor='metric'
					className='text-[.5rem] xl:text-xs'
				>
					metric
				</label>
				<button type='submit'>{magGlass}</button>
			</form>
		</div>
	)
}

export default LocationSearch
