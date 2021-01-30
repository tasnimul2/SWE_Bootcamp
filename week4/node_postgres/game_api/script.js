const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'owners',
  password: '#Mariokart220391478',
  port: 5432,
})
pool.query('SELECT * FROM owners', (err, res) => {
  console.log(err, res) 
  pool.end() 
})