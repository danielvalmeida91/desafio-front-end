'use server'
import { GetLifes } from '@/app/actions'
import { ApexChartMain } from '@/app/components/apex-chart'
import { createColors, createSeries } from '@/utils/helpers'
import { ApexOptions } from 'apexcharts'

export const Lifes = async () => {
  const { lifes } = await GetLifes()

  const series = createSeries({ data: lifes })
  const colors = createColors({ data: lifes })
  const legend = lifes.map((item: any) => {
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
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '30%',
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
      curve: 'smooth',
    },
    fill: {
      opacity: 0.8,

      pattern: {
        width: 2,
        height: 3,
      },
    },
    title: {
      text: 'Vidas',
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
    <div className="bg-white col-span-3 rounded-lg p-8">
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
            <span className="text-gray-500 ml-2 text-xs">{legend[0].name}</span>
          </div>
          <div className="text-palette-text-primary text-xs font-semibold">
            {legend[0].total}
          </div>
        </div>
        <div className="border-l-1-[#EFF1F3] ml-3 mr-3 h-5 border"></div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <div className={`size-3 rounded-full bg-[#07E098]`}></div>
            <span className="text-gray-500 ml-2 text-xs">{legend[1].name}</span>
          </div>
          <div className="text-palette-text-primary text-xs font-semibold">
            {legend[1].total}
          </div>
        </div>
      </div>
    </div>
  )
}
