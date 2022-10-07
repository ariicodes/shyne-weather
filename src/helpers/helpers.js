const getDayName = date => {
	const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
	const d = new Date(date)
	return days[d.getDay() + 1]
}

const dateCheck = (fullDate, date) => (fullDate.includes(date) ? true : false)

const roundNum = num => parseFloat(num).toFixed()

export { getDayName, dateCheck, roundNum }