import './App.css'
import AdditionalInfo from './components/additionalInfo'
import Alert from './components/alert'
import Forecast from './components/forecast'
import LocationSearch from './components/locationSearch'
import TempInfo from './components/tempInfo'

function App() {

  // fetch(`https://api.weatherbit.io/v2.0/current?postal_code=20002&key=b26a6db85afe4b3e8971b1f14016ae3c&units=I&include=minutely`)
  // .then( res => res.json() )
  // .then( data => {
    
  // })

  return (
    <div className="App flex flex-col justify-center gap-2 h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-stone-300 p-5 text-sm font-open">
      <LocationSearch />
      <Alert />
      <TempInfo />
      <AdditionalInfo />
      <Forecast />
    </div>
  )
}

export default App
