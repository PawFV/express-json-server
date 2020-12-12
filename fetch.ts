const axios = require('axios')
const { usersUrl } = require('./config.json')
const dbResults = require('./db.json')
const firstDbUser = dbResults.users.length && dbResults.users[0].id

function api(endpoint = '', method, data = {}) {
  return axios(usersUrl + endpoint, { method, data })
    .then(({ data }) => console.log(data))
    .catch(({ response }) => console.log(response.data))
}


const populate = number => api(`populate/${number}`, 'post')
const getUsers = () => api('', 'get')
const getUser = id => api(`${id}`, 'get')
const updateUser = (id, mutation) => api(`${id}`, 'put', mutation)
const deleteUser = id => api(`${id}`, 'delete')
const deleteUsers = () => api('', 'delete')

// Uncoment wanted methods.

// populate(50)
// getUsers()
// getUser("3d77b9d8-9c29-4af7-90fb-b68c3f48808f")
// deleteUser(firstDbUser)
// deleteUsers()
// updateUser("a7f17c09-0840-47b5-ba0f-b9f522fa6a8c", { name: 'Rose' })

// LOG DB
// console.log(dbResults)
