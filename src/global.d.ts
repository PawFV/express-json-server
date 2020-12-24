import { AxiosPromise } from 'axios'

declare namespace Fetch {
  type Method = 'post' | 'put' | 'delete' | 'get'
  type Api = (
    endpoint: string,
    method: Method,
    data?: unknown
  ) => AxiosPromise<unknown>

  interface ApiCall {
    populate: (number: number) => AxiosPromise
    getUsers: () => AxiosPromise
    getUser: (id: string) => AxiosPromise
    updateUser: (id: string, mutation: unknown) => AxiosPromise
    deleteUser: (id: string) => AxiosPromise
    deleteUsers: () => AxiosPromise
    call: (id: string, method: Method, mutation: unknown) => AxiosPromise
  }
}
