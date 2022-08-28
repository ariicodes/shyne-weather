import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const LocationSearch = () => {
    const magGlass = <FontAwesomeIcon icon={faMagnifyingGlass}/>

    return (
        <div className=''>
            <form className="flex flex-row justify-center items-center gap-3 font-light">
                <input 
                type="text" 
                name="location-search" 
                className="rounded-xl bg-[rgba(255,255,255,0.2)] border-white border-[1.5px] text-center placeholder:text-xs placeholder:italic pb-0.5"
                placeholder='enter zipcode' />
                <p className='text-xs'>units:</p>
                <input type="radio" name='imperial' id='imperial' className='h-2.5 w-2.5 -mr-1' />
                <label htmlFor='imperial' className='text-[.5rem]'>imperial</label>
                <input type="radio" name='metric' id='metric' className='h-2.5 w-2.5 -mr-1' />
                <label htmlFor='metric' className='text-[.5rem]'>metric</label>
                <button type="submit">
                    {magGlass}
                </button>
            </form>
        </div>
    )
}

export default LocationSearch