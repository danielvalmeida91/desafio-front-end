import { Lifes } from './components/charts/lifes'
import { Platforms } from './components/charts/platforms'
import { Reality } from './components/charts/reality'
import { SalesToday } from './components/charts/sales-today'
import { TotalIncome } from './components/charts/total-income'

export default function Dashboard() {
  return (
    <div className="grid max-h-screen grid-cols-12 grid-rows-3 gap-6 p-6">
      <SalesToday />
      <Platforms />
      <TotalIncome />
      <Lifes />
      <Reality />
    </div>
  )
}
