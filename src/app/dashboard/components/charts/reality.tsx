'use server'
import { GetReality } from '@/app/actions'
import { ApexChartMain } from '@/app/components/apex-chart'
import { createColors, createSeries } from '@/utils/helpers'
import { ApexOptions, name } from 'apexcharts'
import { TicketCheck } from 'lucide-react'
import { BsHandbag } from 'react-icons/bs'

type TReality = {
  id: string
  role: string
  color: string
  total: string
  options: {
    name: string
    data: string[]
  }
}

interface IReality {
  data: TReality[]
}
export const Reality = ({ data }: IReality) => {
  const series = createSeries({ data })
  const colors = createColors({ data })
  const legend = data.map((item: TReality) => {
    return {
      name: item.options.name,
      role: item.role,
      total: item.total,
      color: item.color,
    }
  })

  const categories = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul']

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '45%',
      },
    },
    markers: {
      size: 5,
      hover: {
        size: 9,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    title: {
      text: 'Realidade',
      align: 'left',
      style: {
        fontSize: '16px',
        color: '#151D48',
      },
    },
    colors,
    xaxis: {
      categories,
      labels: {
        show: true,
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
    <div className="col-span-3 grid grid-rows-3 rounded-lg bg-white p-8">
      <div className="row-span-2">
        <ApexChartMain
          options={options}
          series={series}
          title={'Realidade'}
          type={'bar'}
        />
      </div>
      <div className="justify-left flex w-full flex-col items-start gap-3">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-md bg-[#E2FFF3] text-[#4AB58E]">
              <BsHandbag />
            </div>
            <div className="mr-2 flex flex-col justify-center">
              <p className="text-sm font-semibold text-palette-text-primary">
                {legend[0].name}
              </p>
              <span className="text-[10px] text-gray-500">
                {legend[0].role}
              </span>
            </div>
            <div className="text-sm font-semibold text-[#27AE60]">
              {legend[0].total}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-md bg-[#FFF4DE] text-[#FFA800]">
              <TicketCheck size={20} />
            </div>
            <div className="mr-2 flex flex-col justify-center">
              <p className="text-sm font-semibold text-palette-text-primary">
                {legend[1].name}
              </p>
              <span className="text-[10px] text-gray-500">
                {legend[1].role}
              </span>
            </div>
            <div className="text-sm font-semibold text-[#FFA412]">
              {legend[1].total}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
