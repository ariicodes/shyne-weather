import './App.css'
import AdditionalInfo from './components/additionalInfo'
import Alert from './components/alert'
import Forecast from './components/forecast'
import LocationSearch from './components/locationSearch'
import TempInfo from './components/tempInfo'

function App() {
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
