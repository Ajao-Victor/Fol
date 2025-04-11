const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
// app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
const corsOptions = {
    origin: [ 'http://localhost:3000'], 
    credentials: true, 
  };
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));

  

const port = 5432;
const pro = process.env.DATABASE_URL

const client = new Client(
    process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
      }
);
const jwtSecret = process.env.JWT_SECRET || 'default_secret';


const connectDB = async () => {
    try {
        await client.connect();
        console.log("Connected to PostgreSQL successfully!");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); 
    }
};
connectDB();


const createTable = async () => {
    const query =
        'CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, username VARCHAR(50) UNIQUE NOT NULL, password VARCHAR(255) NOT NULL,firstname VARCHAR(50),middlename VARCHAR(50),lastname VARCHAR(50),email VARCHAR(50),teir INTEGER DEFAULT 1);';
    await client.query(query);
};
createTable();

app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }

        const existingUser = await client.query('SELECT * FROM users WHERE username = $1', [username]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: "Username already taken" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await client.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
            [username, hashedPassword]
        );

        res.status(201).json({ message: "Registered successfully,welcome to fol app", user: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "User creation failed" });
    }
});

app.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;

        const users = await client.query('SELECT * FROM users WHERE username = $1', [username]);
        if (users.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials, user not found,Sign up' });
        }

        const specUser = users.rows[0];
        const isValidPassword = await bcrypt.compare(password, specUser.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const token = jwt.sign({ userId: specUser.id },   jwtSecret,
             {expiresIn: '1h',});

        res.json({ token, specUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Signin failed' });
    }
});

const authenticateToken = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) return res.status(401).json({ message: 'Access denied' });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied' });

    jwt.verify(token, process.env.JWT_SECRET || 'default_secret', (err, decodedUser) => {
        if (err) return res.status(403).json({ message: 'Token expired or invalid' });
        req.user = decodedUser;
        next();
    });
};

app.get('/landing', authenticateToken, async (req, res) => {
    const userId = req.user.userId;
    try {
        const result = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching data' });
    }
});

app.put("/update", authenticateToken, async (req, res) => {
    const { firstname, middlename, lastname, email,teir } = req.body;
    const userId = req.user.userId; 
  
    try {
      const userCheck = await client.query("SELECT * FROM users WHERE id = $1", [userId]);
      if (userCheck.rowCount === 0) {
        return res.status(404).json({ error: "User not found" });
      }
 
      const result = await client.query(
        "UPDATE users SET firstname = $1, middlename = $2, lastname = $3, email = $4,teir = $5 WHERE id = $6 RETURNING *",
        [firstname, middlename, lastname, email, teir, userId]
      );
  
      res.json({ message: "Account updated successfully", user: result.rows[0] });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Database error" });
    }
  });
app.listen(process.env.PORT , () => {
    console.log(`Server running on port ${port}`);
});
