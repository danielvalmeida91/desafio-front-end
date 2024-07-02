'use server'
import { GetTotalIncome } from '@/app/actions'
import { ApexChartMain } from '@/app/components/apex-chart'
import { createColors, createSeries } from '@/utils/helpers'
import { ApexOptions } from 'apexcharts'

export const TotalIncome = async () => {
  const { totalIncome } = await GetTotalIncome()

  const series = createSeries({ data: totalIncome })
  const colors = createColors({ data: totalIncome })

  const categories = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    'Domingo',
  ]

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '30%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 5,
      colors: ['transparent'],
    },
    title: {
      text: 'Rendimento Total',
      align: 'left',
      style: {
        fontSize: '16px',
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#151D48',
      },
    },
    colors,
    xaxis: {
      categories,
      labels: {
        style: {
          colors: '#7B91B0',
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      labels: {
        style: { colors: '#7B91B0', fontSize: '10px' },
      },
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      markers: {
        radius: 99,
      },
    },
    grid: {
      show: true,
      strokeDashArray: 0,
      borderColor: '#EFF1F3',
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  }

  return (
    <div className="bg-white col-span-6 rounded-lg p-8">
      <ApexChartMain
        options={options}
        series={series}
        title={'Rendimento total'}
        type={'bar'}
        categories={categories}
      />
    </div>
  )
}
