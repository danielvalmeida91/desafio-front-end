'use server'
import {
  GetCountrySales,
  GetLifes,
  GetPlatforms,
  GetReality,
  GetSales,
  GetServiceLevel,
  GetTopProducts,
  GetTotalIncome,
} from '../actions'
import { Country } from './components/charts/country'
import { Lifes } from './components/charts/lifes'
import { Platforms } from './components/charts/platforms'
import { Reality } from './components/charts/reality'
import { SalesToday } from './components/charts/sales-today'
import { ServiceLevel } from './components/charts/service-level'
import { TopProducts } from './components/charts/top-products'
import { TotalIncome } from './components/charts/total-income'

export default async function Dashboard() {
  const { country } = await GetCountrySales()
  const { lifes } = await GetLifes()
  const { platforms } = await GetPlatforms()
  const { reality } = await GetReality()
  const { sales } = await GetSales()
  const { topProducts } = await GetTopProducts()
  const { totalIncome } = await GetTotalIncome()
  const { serviceLevel } = await GetServiceLevel()

  return (
    <div className="grid max-h-screen grid-cols-12 grid-rows-12 gap-4 p-4">
      <SalesToday data={sales} />
      <Platforms data={platforms} />
      <TotalIncome data={totalIncome} />
      <Lifes data={lifes} />
      <Reality data={reality} />
      <TopProducts data={topProducts} />
      <Country data={country} colors={['#CCCCCC', '#2500FF']} />
      <ServiceLevel data={serviceLevel} />
    </div>
  )
}
