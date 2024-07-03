'use client'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface IApexChartMain {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries
  options: ApexOptions
  type: 'line' | 'area' | 'bar' | 'pie' | 'donut' | 'radar' | undefined
}

export const ApexChartMain = ({
  series,
  options,
  type = 'line',
}: IApexChartMain) => {
  return (
    <ApexChart
      type={type}
      series={series}
      options={options}
      height={'100%'}
      width={'100%'}
    />
  )
}
