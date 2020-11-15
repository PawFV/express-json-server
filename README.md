# Simple Express JSON-Server

## Table of Contents

- [Simple Express JSON-Server](#simple-express-json-server)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Requirement](#requirement)
  - [Install](#install)
  - [Usage](#usage)
    - [Examples:](#examples)
      - [Populate DB with random data](#populate-db-with-random-data)
      - [Update a user](#update-a-user)
      - [Generate mock data](#generate-mock-data)
  - [Contributing](#contributing)
  - [License](#license)

## About

Simple Nodejs Express API using [Lowdb](https://github.com/typicode/lowdb) a small JSON database.

## Requirement

- Node.js

## Install

```cmd
$ npm install
```

## Usage

**Launches Express http server with nodemon**

```cmd
$ npm start
```

**Launches an http request to your server with Axios**

```cmd
$ npm run api
```

### Examples:

#### Populate DB with random data

`npm run api`

```js
// fetch.js

const populate = number => api(`populate/${number}`, 'post')

// Uncoment wanted queries.
populate(50)
// getUsers()
// ...

// Expected output:
  "users": [
    {
      "id": "9c2fc126-0766-42b2-b26d-032a3540e442",
      "name": "Rawson",
      "email": "Kristy.Gaylord33@gmail.com"
    },
    // 49 more...
  ]
```

#### Update a user

`npm run api`

```js
// fetch.js

const updateUser = (id, mutation) => api(`${id}`, 'put', mutation)

// Uncoment wanted queries.
updateUser("9c2fc126-0766-42b2-b26d-032a3540e442", { name: 'Paw', sex: 'Not found' })
// ...

// Expected output:
{
  updatedUser: {
    id: '9c2fc126-0766-42b2-b26d-032a3540e442',
    name: 'Paw',
    email: 'Kristy.Gaylord33@gmail.com',
    sex: 'Not found'
  }
}
```

#### Generate mock data

it uses [faker.js](https://www.npmjs.com/package/faker) to generate random realistic data, make the wanted changes here.

```js
// routes/users.js

router.post('/populate/:number', (req, res) => {
  const { number } = req.params

  for (let i = 0; i < number; i++) {
    // Random fake data. more on https://www.npmjs.com/package/faker
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
    db.get('users').push(user).write()
  }

  res.json({ message: 'users created!', 'users': db.get('users').value() })
})
```

## Contributing

Open an [issue](https://github.com/PawFV/express-json-server/issues/new) or submit [PRs](https://github.com/PawFV/express-json-server/pulls).

## License

MIT - [PawFV](<[LICENSE](https://github.com/PawFV/)>).
