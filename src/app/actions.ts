'use server'

import { api } from '@/utils/api'

export const GetMenu = async () => {
  const { data } = await api.get('/api/menu')

  return data
}

export const GetLanguage = async () => {
  const { data } = await api.get('/api/languages')

  return data
}

export const GetNotifications = async () => {
  const { data } = await api.get('/api/notifications')

  return data
}

export const GetSales = async () => {
  const { data } = await api.get('/api/charts/sales')

  return data
}

export const GetProfiles = async () => {
  const { data } = await api.get('/api/profiles')

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

export const GetTopProducts = async () => {
  const { data } = await api.get('/api/charts/top-products')

  return data
}

export const GetCountrySales = async () => {
  const { data } = await api.get('/api/charts/country')

  return data
}

export const GetServiceLevel = async () => {
  const { data } = await api.get('/api/charts/service-level')

  return data
}
