-- Cloudflare D1 Schema for a booking platform

DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS services;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT
);

CREATE TABLE services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  duration_minutes INTEGER NOT NULL,
  price REAL NOT NULL
);

CREATE TABLE appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  service_id INTEGER NOT NULL,
  start_time TEXT NOT NULL, -- ISO 8601 format: YYYY-MM-DDTHH:MM:SS
  end_time TEXT NOT NULL,   -- ISO 8601 format: YYYY-MM-DDTHH:MM:SS
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (service_id) REFERENCES services (id)
);

-- Example data
INSERT INTO users (name, email, phone) VALUES ('John Doe', 'john.doe@example.com', '1234567890');
INSERT INTO services (name, description, duration_minutes, price) VALUES ('Haircut', 'Standard haircut for men', 30, 25.00);
