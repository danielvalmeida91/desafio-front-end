import { GetLifes } from '@/app/actions'
import { ApexChartMain } from '@/app/components/apex-chart'
import { createColors, createSeries } from '@/utils/helpers'
import { ApexOptions } from 'apexcharts'

type TLifes = {
  id: string
  color: string
  name: string
  data: string[]
  total: string
  options: {
    name: string
    data: string[]
  }
}

interface ILifes {
  data: TLifes[]
}
export const Lifes = ({ data }: ILifes) => {
  const series = createSeries({ data })
  const colors = createColors({ data })
  const legend = data.map((item: TLifes) => {
    return {
      name: item.options.name,
      total: item.total,
      color: item.color,
    }
  })

  const options: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    markers: {
      size: 4.5,
      hover: {
        size: 9,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    fill: {
      // pattern: {
      //   width: 1,
      //   height: 2,
      // },
    },
    title: {
      text: 'Vidas',
      align: 'left',
      style: {
        fontSize: '16px',
        color: '#151D48',
      },
    },
    colors,
    xaxis: {
      labels: {
        show: false,
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
      show: false,
      min: 250,
      labels: {
        style: { colors: '#7B91B0', fontSize: '10px' },
      },
    },
    legend: {
      show: false,
      position: 'bottom',
      horizontalAlign: 'center',
      itemMargin: {
        horizontal: 20,
      },
      markers: {
        radius: 99,
        width: 12,
      },
    },
    grid: {
      show: false,
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
    <div className="col-span-3 rounded-lg bg-white p-8">
      <ApexChartMain
        options={options}
        series={series}
        title={'Vidas'}
        type={'area'}
      />
      <div className="flex w-full justify-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <div className={`size-3 rounded-full bg-[#0095FF]`}></div>
            <span className="ml-2 text-xs text-gray-500">{legend[0].name}</span>
          </div>
          <div className="text-xs font-semibold text-palette-text-primary">
            {legend[0].total}
          </div>
        </div>
        <div className="border-l-1-[#EFF1F3] ml-3 mr-3 h-5 border"></div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <div className={`size-3 rounded-full bg-[#07E098]`}></div>
            <span className="ml-2 text-xs text-gray-500">{legend[1].name}</span>
          </div>
          <div className="text-xs font-semibold text-palette-text-primary">
            {legend[1].total}
          </div>
        </div>
      </div>
    </div>
  )
}
