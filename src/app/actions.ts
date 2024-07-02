'use server'

import { api } from '@/utils/api'

export const GetLanguage = async () => {
  const { data } = await api.get('/api/languages')

  return data
}

export const GetSales = async () => {
  const { data } = await api.get('/api/charts/sales')

  return data
}

export const GetPlatforms = async () => {
  const { data } = await api.get('/api/charts/platforms')

  return data
}

export const GetTotalIncome = async () => {
  const { data } = await api.get('/api/charts/total-income')

  return data
}

export const GetLifes = async () => {
  const { data } = await api.get('/api/charts/lifes')

  return data
}

export const GetReality = async () => {
  const { data } = await api.get('/api/charts/reality')

  return data
}
