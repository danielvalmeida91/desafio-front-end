'use server'
import { GetCountrySales } from '@/app/actions'
import Chart from 'react-google-charts'

export const Country = async () => {
  const { country: data } = await GetCountrySales()

  const options = {
    region: 'BR',
    displayMode: 'regions',
    resolution: 'provinces',
    colorAxis: { colors: ['#CCCCCC', '#2500FF'] },
    legend: 'none',
    magnifyingGlass: { enable: true, zoomFactor: 20 },
  }

  return (
    <div className="col-span-3 rounded-lg bg-white p-8">
      <h6 className="font-bold text-palette-text-primary">
        Mapeamento de vendas por UF
      </h6>
      <Chart
        chartType="GeoChart"
        width="100%"
        data={data}
        options={options}
        className="flex justify-center"
      />
    </div>
  )
}
