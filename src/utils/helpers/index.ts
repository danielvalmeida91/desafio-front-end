type TData = {
  id: string
  color: string
  name: string
  data: string[]
  options: {
    name: string
    data: string[]
  }
}
interface IData {
  data: TData[]
}

export const createSeries = ({ data }: IData) => {
  const series = data.map((item: TData) => {
    if (item.data) {
      return { name: item.name, data: item.data }
    }
    return { name: item.options.name, data: item.options.data }
  })

  return series
}

export const createColors = ({ data }: IData) => {
  const colors = data.map((item) => {
    return item.color
  })

  return colors
}
