import { ApexChartMain } from '@/app/components/apex-chart'
import { createColors, createSeries } from '@/utils/helpers'
import { ApexOptions } from 'apexcharts'

type TPlatform = {
  id: string
  color: string
  options: {
    name: string
    data: string[]
  }
}

interface IPlatforms {
  data: TPlatform[]
}
export const Platforms = async ({ data }: IPlatforms) => {
  const series = createSeries({ data })
  const colors = createColors({ data })

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
        fontSize: '16px',
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
    <div className="col-span-5 rounded-lg bg-white p-8">
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
