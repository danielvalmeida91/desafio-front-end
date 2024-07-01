'use server'

import { api } from '@/utils/api'

export const GetLanguage = async () => {
  const { data } = await api.get('/api/languages')

  return data
}
