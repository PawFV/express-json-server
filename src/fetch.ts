import axios from 'axios'
import { usersUrl } from '../config.json'
import { Fetch } from './global'

const api: Fetch.Api = async (endpoint = '', method, data = {}) => {
  try {
    return await axios(usersUrl + endpoint, { method, data })
  } catch (error) {
    console.log(error)
    return error
  }
}

const apiCall: Fetch.ApiCall = {
  populate: number => api(`populate/${number}`, 'post'),
  getUsers: () => api('', 'get'),
  getUser: id => api(`${id}`, 'get'),
  updateUser: (id, mutation) => api(`${id}`, 'put', mutation),
  deleteUser: id => api(`${id}`, 'delete'),
  deleteUsers: () => api('', 'delete'),
  call: (id, method, mutation) => api(id, method, mutation)
}

export { apiCall }
