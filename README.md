This project was bootstrapped with [express-generator ](https://www.npmjs.com/package/express-generator).

## Available Scripts

In the project directory, you can run:

### `npm dev`

Runs the app in the development mode.<br />
Open [http://localhost:4000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />


### `npm test`

Launches the test runner in the interactive watch mode.<br />

## Migrations

Before running any migrations, you should setup database for <br />
developmnet and second one for testing.

In root of the project  `knexFile.js` you should setup configuration, <br /> 
entering valid credentials and db name. 

Afterwards in the project directory, you can run:

#### `knex migrate:latest --env development`

It should create 3 new tables `movies`, `knex_migrations` and `knex_migrations_lock` <br /> 
inside of your `database` for development.

#### `knex seed:run --env development`

It should populate your `table movies` with three new movies.

#### `knex migrate:latest --env test`

It should create 3 new tables `movies`, `knex_migrations` and `knex_migrations_lock` <br /> 
inside of your `database` for testing.

You could run:

#### `knex seed:run --env test`
It should populate your `table movies` with three new movies.

It is  unnecessary, testing script deletes all movies <br />
and then inserts movie before testing.


