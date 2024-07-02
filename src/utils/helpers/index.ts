interface IData {
  data: {
    id: string
    color: string
    options: {
      name: string
      data: string[]
    }
  }[]
}

export const createSeries = ({ data }: IData) => {
  const series = data.map(
    (item: { options: { name: string; data: string[] } }) => {
      return {
        name: item.options.name,
        data: item.options.data,
      }
    },
  )
  return series
}

export const createColors = ({ data }: IData) => {
  const colors = data.map((item) => {
    return item.color
  })

  return colors
}
