const router = require('express').Router()
const faker = require('faker')
const { db } = require('./db')

/** @description GET ALL Users */
router.get('/', (req, res) => {
  const users = db.get('users').value()
  res.json({ users })
})

/** @description GET User by id */
router.get('/:id', (req, res) => {
  const { id } = req.params
  const user = db
    .get('users')
    .find({ id })
    .value()
  user ? res.json({ user }) : res.json({ error: 'user not found' })
})

/** @description UPDATE User by id @param {object} - mutation  */
router.put('/:id', (req, res) => {
  const { id } = req.params
  const mutation = req.body
  const user = db
    .get('users')
    .find({ id })
    .value()
  if (!user) return res.json({ error: `user with id:"${id}" not found` })
  const updatedUser = db
    .get('users')
    .find({ id })
    .assign(mutation)
    .write()

  res.json({ updatedUser })
})

/** @description DELETE User by id */
router.delete('/:id', (req, res) => {
  const { id } = req.params
  const userDeleted = db
    .get('users')
    .remove({ id })
    .write()

  !!userDeleted.length
    ? res.json({ message: 'user deleted!' })
    : res.json({ error: 'user not found' })
})

/** @description DELETE ALL Users */
router.delete('/', (req, res) => {
  db.get('users')
    .remove()
    .write()
  res.json({ message: 'dropped users!' })
})

/** @description Populates database */
router.post('/populate/:number', (req, res) => {
  const { number } = req.params

  for (let i = 0; i < number; i++) {
    const user = {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      email: faker.internet.email(),
      address: faker.address.direction(),
      country: faker.address.county(),
      phone: faker.phone.phoneNumber(),
      vehicle: faker.vehicle.vehicle(),
      model: faker.vehicle.model(),
      color: faker.vehicle.color(),
      avatarUrl: faker.image.avatar(),
      bgImg: faker.image.nature()
    }
    db.get('users')
      .push(user)
      .write()
  }

  res.json({ message: 'users created!', 'users': db.get('users').value() })
})

module.exports = router
