const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sqlvulndb',
  password: 'vxd-Th1-FoR',
  port: 5432,
});

module.exports = pool;