const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

// Database configuration automatically injected by docker-compose
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Main API Route (Tests the DB connection!)
app.get('/', async (req, res) => {
  try {
    const dbRes = await pool.query('SELECT NOW()');
    res.json({
      message: 'Hello from the Dockerized Backend!',
      db_time: dbRes.rows[0].now,
      status: 'Connected to PostgreSQL database successfully!'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed', details: err.message });
  }
});

// Health check endpoint for Docker's healthcheck config
app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});