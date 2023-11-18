const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pensieve_test',
  password: 'root',
  port: 5432,
});

app.get('/', (req, res) => {
  res.send('Hello World! This is the root route.');
});


app.get('/data', async (req, res) => {
  try {
    // const unique_device_id = await pool.query('SELECT DISTINCT(device_id) FROM gps');
    // const unique_device_type = await pool.query('SELECT DISTINCT(device_type) FROM gps');
    // const time = await pool.query('SELECT timestamp FROM gps');
    // res.json(time.rows);
    // res.json(unique_device_type.rows);
    const all_data = await pool.query('SELECT * FROM gps');
    res.json(all_data.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
