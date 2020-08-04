

module.exports = {
  development: {
    client: 'mysql2',  //process.env.CLIENT
    connection: {
      /*host: process.env.HOST,
      user: process.env.USER,
      database: process.env.DATABASE,
      password: process.env.PASSWORD*/
      host: '127.0.0.1',
      user: 'movi-sorter',
      database: 'moviecatalogue',
      password: '1234'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },
  test:{
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'movi-sorter',
      database: 'moviecataloguetest',
      password: '1234'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },
  production: {
    client: 'mysql2',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
};