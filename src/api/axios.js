import axios from 'axios'
import { useEffect, useState } from 'react'

// const [zipCoordinates, getZipCoordinates] = useState({})
// const [cityCoordinates, getCityCoorindates] = useState({})
// const [oneCall, getOneCall] = useState({})

// const geocodingZipUrl = `http://api.openweathermap.org/geo/1.0/zip?appid=bcb143dddef468ea78876abd06504311&zip=20002`
// const geocodingCityUrl = `http://api.openweathermap.org/geo/1.0/direct?q=Washington&appid=bcb143dddef468ea78876abd06504311`
// const oneCallUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=38.9024&lon=-76.9901&units=imperial&exclude=minutely,hourly&appid=bcb143dddef468ea78876abd06504311`

// const zipData = () => {
//   axios.get(geocodingZipUrl)
//   .then((res) => {
//     getZipCoordinates(res)
//   })
//   .catch((e) => {
//     console.log('ERROR: ', e)
//   })
// }

// const cityData = () => {
//   axios.get(geocodingCityUrl)
//   .then((res) => {
//     getCityCoorindates(res)
//   })
//   .catch((e) => {
//     console.log('ERROR: ', e)
//   })
// }

// const oneCallData = () => {
//   axios.get(oneCallUrl)
//   .then((res) => {
//     getOneCall(res)
//   })
//   .catch((e) => {
//     console.log('ERROR: ', e)
//   })
// }

// useEffect(() => zipData())
// useEffect(() => cityData())
// useEffect(() => oneCallData())