'use client'
import Chart from 'react-google-charts'

interface ICountry {
  data: [string, string][]
  colors: string[]
}

export const Country = ({ data, colors }: ICountry) => {
  const options = {
    region: 'BR',
    displayMode: 'regions',
    resolution: 'provinces',
    colorAxis: { colors },
    legend: 'none',
    magnifyingGlass: { enable: true, zoomFactor: 15 },
  }

  return (
    <div className="col-span-3 rounded-lg bg-white p-8">
      <h6 className="font-bold text-palette-text-primary">
        Mapeamento de vendas por UF
      </h6>
      <Chart
        chartType="GeoChart"
        width="100%"
        height={'100%'}
        data={data}
        options={options}
        className="flex justify-center"
      />
    </div>
  )
}
