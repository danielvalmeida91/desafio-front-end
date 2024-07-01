import axios, { AxiosError, AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

const onRequestError = (error: AxiosError) => {
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse) => {
  return response
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (error.response && error.response.data && error.response.data.message) {
    error.message = error.response.data.message
  } else if (error.code === 'ERR_NETWORK') {
    error.message = 'Falha na conexão com o servidor'
  }

  return Promise.reject(error) // Always return a rejected Promise to propagate the error
}

api.interceptors.request.use(null, onRequestError)
api.interceptors.response.use(onResponse, onResponseError)

export { api }
