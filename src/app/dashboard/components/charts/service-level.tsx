import { GetTotalIncome } from '@/app/actions'
import { ApexChartMain } from '@/app/components/apex-chart'
import { createColors, createSeries } from '@/utils/helpers'
import { ApexOptions } from 'apexcharts'

type TServiceLevel = {
  id: string
  color: string
  name: string
  data: string[]
  options: {
    name: string
    data: string[]
  }
}

interface IServiceLevel {
  data: TServiceLevel[]
}

export const ServiceLevel = ({ data }: IServiceLevel) => {
  const series = createSeries({ data })
  const colors = createColors({ data })

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: '30%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['transparent'],
    },
    title: {
      text: 'Nível de serviço',
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
    <div className="col-span-3 rounded-lg bg-white p-8">
      <ApexChartMain
        options={options}
        series={series}
        title={'Nível de serviço'}
        type={'bar'}
      />
    </div>
  )
}
