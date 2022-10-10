const getDayName = date => {
	const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
	const d = new Date(date)
	return days[d.getDay() + 1]
}

const roundNum = num => parseFloat(num).toFixed()

const trunc = str => str.substring(0, 45)


export { getDayName, roundNum, trunc }