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

export const GetProfiles = async () => {
  const { data } = await api.get('/api/profiles')

  return data
}
