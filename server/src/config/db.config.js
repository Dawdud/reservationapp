const Pool = require("pg").Pool;

const pool = new Pool({
  user: "dawidnode",
  host: "localhost",
  database: "nodeapi",
  password: "Kolano8.06.2012",
  port: 5432
});
export default pool;
