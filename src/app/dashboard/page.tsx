import { Lifes } from './components/charts/lifes'
import { Platforms } from './components/charts/platforms'
import { Reality } from './components/charts/reality'
import { SalesToday } from './components/charts/sales-today'
import { TopProducts } from './components/charts/top-products'
import { TotalIncome } from './components/charts/total-income'

export default function Dashboard() {
  return (
    <div className="grid max-h-screen grid-cols-12 grid-rows-3 gap-4 p-4">
      <SalesToday />
      <Platforms />
      <TotalIncome />
      <Lifes />
      <Reality />
      <TopProducts />
    </div>
  )
}
