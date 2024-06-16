import axios from "axios"

export const BASE_URL = "https://api.mashinno.com"



const ENDPOINT_URL = BASE_URL + "/vendor/v1"

export function getBaseUrl() {
  return BASE_URL
}





export const webRequest = async (props) => {

  const axiosInstance = axios.create({
    baseURL: ENDPOINT_URL,
  })

  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    err => {
      Promise.reject(err)
      return
    }
  )


  const config = {
    "Content-Type": "multipart/form-data",
    method: props.method,
    headers: props.auth ? {Authorization: `Bearer ${props.auth?.authorisation?.token}`} : {},
  };


  axiosInstance.interceptors.response.use(
    res => {
      return res;
    },
    err => {
      const res = err?.response
      if (res) {
        if (res.status === 500) {
          Promise.reject(err)
        }
      }

      Promise.reject(err)
      return;
    }
  )


  let result
  if (props.auth) {
    result = await axiosInstance.post(ENDPOINT_URL + props.url, props.data, config)
  } else {
    result = await axiosInstance.post(ENDPOINT_URL + props.url, props.data, config)
  }

  if (result) {

    return await result.data;
  } else {
    return {
      notFound: true
    };
  }
}
