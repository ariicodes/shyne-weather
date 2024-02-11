const getDayName = date => {
	const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
	const d = new Date(date)
	return days[d.getDay()]
}

const roundNum = num => parseFloat(num).toFixed()

const trunc = str => str.substring(0, 50)


export { getDayName, roundNum, trunc }