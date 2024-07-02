'use server'
import { GetPlatforms } from '@/app/actions'
import { ApexChartMain } from '@/app/components/apex-chart'
import { createColors, createSeries } from '@/utils/helpers'
import { ApexOptions } from 'apexcharts'

export const Platforms = async () => {
  const { platforms } = await GetPlatforms()

  const series = createSeries({ data: platforms })
  const colors = createColors({ data: platforms })

  const categories = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ]

  const options: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    title: {
      text: 'Plataformas',
      align: 'left',
      style: {
        fontSize: '18px',
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#151D48',
      },
    },
    stroke: {
      curve: 'smooth',
      lineCap: 'round',
      width: [3.2, 3.2, 3.2],
    },
    colors,
    xaxis: {
      categories,
      labels: {
        style: {
          colors: '#151D48',
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
      stepSize: 100,
      min: 0,
      labels: {
        style: { colors: '#9699ac' },
      },
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      itemMargin: {
        horizontal: 30,
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
    <div className="bg-white col-span-5 rounded-lg p-8">
      <ApexChartMain
        options={options}
        series={series}
        title={'Plataformas'}
        type={'line'}
        categories={categories}
      />
    </div>
  )
}
