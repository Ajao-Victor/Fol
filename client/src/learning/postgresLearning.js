import React from "react";
import './postgresLearning.css';
import { Link } from "react-router-dom";

const commands = [
  {
    title: "1. Check PostgreSQL Version",
    description: "Displays the installed PostgreSQL version.",
    command: "SELECT version();"
  },
  {
    title: "2. List All Databases",
    description: "Shows a list of all databases in the PostgreSQL instance.",
    command: "\\l"
  },
  {
    title: "3. Connect to a Database",
    description: "Switches to a specified database.",
    command: "\\c database_name"
  },
  {
    title: "4. Create a Database",
    description: "Creates a new PostgreSQL database.",
    command: "CREATE DATABASE my_database;"
  },
  {
    title: "5. Drop a Database",
    description: "Deletes a database permanently.",
    command: "DROP DATABASE my_database;"
  },
  {
    title: "6. List All Tables in a Database",
    description: "Displays all tables in the connected database.",
    command: "\\dt"
  },
  {
    title: "7. Create a Table",
    description: "Defines a new table with specified columns and data types.",
    command: `CREATE TABLE users (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100) UNIQUE
);`
  },
  {
    title: "8. Insert Data into a Table",
    description: "Adds a new record into a table.",
    command: `INSERT INTO users (name, email)
VALUES ('John Doe', 'john@example.com');`
  },
  {
    title: "9. Select Data from a Table",
    description: "Retrieves all rows from a table.",
    command: "SELECT * FROM users;"
  },
  {
    title: "10. Select Specific Columns",
    description: "Retrieves only specified columns from a table.",
    command: "SELECT name, email FROM users;"
  },
  {
    title: "11. Filter Data Using WHERE Clause",
    description: "Filters results based on a condition.",
    command: "SELECT * FROM users WHERE name = 'John Doe';"
  },
  {
    title: "12. Update Existing Records",
    description: "Modifies data in a table.",
    command: "UPDATE users SET email = 'newemail@example.com' WHERE name = 'John Doe';"
  },
  {
    title: "13. Delete a Record",
    description: "Removes specific data from a table.",
    command: "DELETE FROM users WHERE name = 'John Doe';"
  },
  {
    title: "14. Truncate a Table",
    description: "Deletes all records from a table but keeps the structure intact.",
    command: "TRUNCATE TABLE users;"
  },
  {
    title: "15. Drop a Table",
    description: "Deletes a table and all of its data permanently.",
    command: "DROP TABLE users;"
  },
  {
    title: "16. Add a Column to a Table",
    description: "Adds a new column to an existing table.",
    command: "ALTER TABLE users ADD COLUMN age INT;"
  },
  {
    title: "17. Remove a Column from a Table",
    description: "Deletes a column from a table.",
    command: "ALTER TABLE users DROP COLUMN age;"
  },
  {
    title: "18. Rename a Column",
    description: "Changes the name of a column in a table.",
    command: "ALTER TABLE users RENAME COLUMN name TO full_name;"
  },
  {
    title: "19. Create an Index",
    description: "Creates an index on a table column to speed up queries.",
    command: "CREATE INDEX email_index ON users(email);"
  },
  {
    title: "20. Drop an Index",
    description: "Removes an existing index from a table.",
    command: "DROP INDEX email_index;"
  },
  {
    title: "21. Show Indexes on a Table",
    description: "Lists all indexes on a specific table.",
    command: "\\di users"
  },
  {
    title: "22. Count Rows in a Table",
    description: "Returns the number of records in a table.",
    command: "SELECT COUNT(*) FROM users;"
  },
  {
    title: "23. Find the Maximum Value",
    description: "Retrieves the highest value in a column.",
    command: "SELECT MAX(age) FROM users;"
  },
  {
    title: "24. Find the Minimum Value",
    description: "Retrieves the lowest value in a column.",
    command: "SELECT MIN(age) FROM users;"
  },
  {
    title: "25. Find the Average Value",
    description: "Calculates the average of a column.",
    command: "SELECT AVG(age) FROM users;"
  }
];

const PostgreSQLCommands = () => {
  return (
    <div className="container">
      {/* <h1>PostgreSQL Commands Guide</h1>
      <p>
        Below is a collection of commonly used PostgreSQL commands along with
        their explanations and examples.
      </p> */}
      <>
      <h2>PostgreSQL: A Comprehensive Guide</h2>
<h3>Introduction to PostgreSQL</h3>
<div>PostgreSQL, often referred to as Postgres, is an advanced, open-source, object-relational database management system (ORDBMS). It is known for its robust features, high performance, and extensibility, making it a top choice for developers and enterprises. <br/>

It was first released in 1986 as part of the POSTGRES project at the University of California, Berkeley, and has since evolved into one of the most powerful databases available today.</div> <br/> <br/>

<div>
1️⃣ Key Features of PostgreSQL
PostgreSQL stands out from other databases due to its rich feature set. Some of its core features include: <br/><br/>

🔹 ACID Compliance
PostgreSQL follows ACID (Atomicity, Consistency, Isolation, Durability) principles, ensuring data integrity and reliability.<br/><br/>

🔹 Open Source and Community-Driven
PostgreSQL is open-source, meaning it is free to use, modify, and distribute. It has a large, active community that constantly improves it.<br/>

🔹 Extensibility
Developers can create custom data types, operators, and functions, allowing PostgreSQL to be adapted to various applications.<br/><br/>

🔹 JSON Support (Hybrid Database)
PostgreSQL supports JSON and JSONB, enabling it to function like a NoSQL database while maintaining relational capabilities.<br/><br/>

🔹 Full-Text Search
It provides powerful full-text search capabilities, making it ideal for applications requiring search functionality.<br/><br/>

🔹 Advanced Indexing
PostgreSQL supports multiple types of indexes, including:<br/><br/>

B-Tree (default) – Best for range queries.
GIN (Generalized Inverted Index) – Best for full-text search.
BRIN (Block Range Index) – Optimized for large tables.<br/><br/>
🔹 MVCC (Multi-Version Concurrency Control)
PostgreSQL handles concurrent transactions efficiently, allowing multiple users to read and write data without conflicts.<br/><br/>
</div> <br/>

<div>
2️⃣ PostgreSQL Architecture
PostgreSQL follows a client-server architecture with multiple background processes working together. <br/> <br/>


🔹 Main Components
Postmaster Process – Manages database connections and spawns child processes.
Shared Buffers – Stores frequently accessed data for improved performance.
WAL (Write-Ahead Logging) – Ensures data durability by writing logs before making changes.
Autovacuum Process – Optimizes tables by removing dead tuples. <br/> <br/>
</div>


<div> <br/>

3️⃣ PostgreSQL Installation and Setup
PostgreSQL is cross-platform and can be installed on Windows, macOS, and Linux. <br/>
🔹 Installation on Linux (Ubuntu/Debian) <br/> <br/>
<div className="code-container">
            <pre>
              <code>sudo apt update <br/>
sudo apt install postgresql postgresql-contrib
</code>
            </pre>
          </div> <br/>
    <div>Start and enable the PostgreSQL service: &nbsp; 
<div className="code-container">
            <pre>
              <code>sudo systemctl start postgresql  &nbsp;
sudo systemctl enable postgresql

</code>
            </pre>
          </div>  &nbsp; <br/> <br/>
                 <div>🔹 Installation on Windows  <br/>  <br/>
1.Download the installer from PostgreSQL official website.  <br/>
2.Follow the installation wizard.  <br/>
3.Use pgAdmin or psql (PostgreSQL Shell) to interact with the database.  <br/> </div>  
          </div> &nbsp;

</div> 

 
<div>  &nbsp;


4️⃣ PostgreSQL Basic Commands  <br/> <br/>
🔹 Connecting to PostgreSQL
To connect to PostgreSQL, use:  &nbsp;
<div className="code-container">
            <pre>
              <code>psql -U postgres</code>
            </pre>
          </div> &nbsp;
<div>
🔹 Creating a New Database
<div className="code-container">
            <pre>
              <code>CREATE DATABASE my_database;
              </code>
            </pre>
          </div> &nbsp;

</div>
<div>
🔹 Listing Databases &nbsp;
<div className="code-container">
            <pre>
              <code>\l

              </code>
            </pre>
          </div> 

</div> &nbsp;

<div>
🔹 Connecting to a Database
<div className="code-container">
            <pre>
              <code>\c my_database
              </code>
            </pre>
          </div>

</div> &nbsp;

<div>
🔹 Creating a Table 
&nbsp; <div className="code-container">
            <pre>
              <code>CREATE TABLE users ( <br/>
  id SERIAL PRIMARY KEY,<br/>
  name VARCHAR(100),<br/>
  email VARCHAR(100) UNIQUE<br/>
);
              </code>
            </pre>
          </div> &nbsp;

</div>
<div>
🔹 Inserting Data
<div className="code-container">
            <pre>
              <code>INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
              </code>
            </pre>
          </div>

</div> &nbsp;

<div>
🔹 Retrieving Data
<div className="code-container">
            <pre>
              <code>SELECT * FROM users;
              </code>
            </pre>
          </div>

</div> &nbsp;
<div>
🔹 Updating a Record
<div className="code-container">
            <pre>
              <code>UPDATE users SET email = 'new@example.com' WHERE name = 'Alice';
              </code>
            </pre>
          </div>

</div> &nbsp;

<div>
🔹 Deleting a Record
<div className="code-container">
            <pre>
              <code>DELETE FROM users WHERE name = 'Alice';
              </code>
            </pre>
          </div>
</div> &nbsp;
<div>
🔹 Dropping a Table
<div className="code-container">
            <pre>
              <code>DROP TABLE users;
              </code>
            </pre>
          </div>
</div> &nbsp;


</div> <br/> <br/>

<div>
  {/* number 5 */}
  <h2>5️⃣ Advanced PostgreSQL Features
  </h2>
  <h5>🔹 User Management</h5>
  <div>
  Creating a new user:
<div className="code-container">
            <pre>
              <code>CREATE USER my_user WITH PASSWORD 'securepassword';

              </code>
            </pre>
          </div>
</div> &nbsp;
<div>
Granting privileges:
<div className="code-container">
            <pre>
              <code>GRANT ALL PRIVILEGES ON DATABASE my_database TO my_user;

              </code>
            </pre>
          </div>
</div> &nbsp;
<div>
🔹 Foreign Keys (Relationships)
sql
Copy
Edit

<div className="code-container">
            <pre>
              <code>CREATE TABLE orders ( <br/>
  order_id SERIAL PRIMARY KEY,<br/>
  user_id INT REFERENCES users(id),<br/>
  amount DECIMAL(10,2)<br/>
);

              </code>
            </pre>
          </div>
</div> &nbsp;
<div>
<p>🔹Transactions</p>  &nbsp;
PostgreSQL supports transactions, ensuring that multiple queries execute as a single unit:
<div className="code-container">
            <pre>
              <code>BEGIN; <br/>
UPDATE users SET email = 'updated@example.com' WHERE id = 1;<br/>
INSERT INTO orders (user_id, amount) VALUES (1, 99.99);<br/>
COMMIT;<br/>

              </code>
            </pre>
          </div>
</div> &nbsp;
<div>
To roll back a transaction:
<div className="code-container">
            <pre>
              <code>ROLLBACK;
              </code>
            </pre>
          </div>
</div> &nbsp;
</div>

<div>
  {/* number 6 */}

  <h2>6️⃣ PostgreSQL Performance Optimization</h2>
  <h3>🔹 Indexing</h3>

  <div>
    <h2>🔹 Indexing</h2>
  Indexes improve query performance:
<div className="code-container">
            <pre>
              <code>CREATE INDEX idx_users_email ON users(email);

              </code>
            </pre>
          </div>
</div>
<div>
<h2>🔹 VACUUM and ANALYZE</h2>
PostgreSQL does auto-vacuum, but manual execution optimizes performance:
<div className="code-container">
            <pre>
              <code>VACUUM ANALYZE;

              </code>
            </pre>
          </div>
</div>
<div>
<h2>🔹 Partitioning Large Tables</h2>
Partitioning splits large tables into smaller chunks:
<div className="code-container">
            <pre>
              <code>CREATE TABLE orders_2024 PARTITION OF orders <br/>
FOR VALUES FROM ('2024-01-01') TO ('2024-12-31');

              </code>
            </pre>
          </div>
</div>

</div>

<div>
  {/* number 7 */}
  <h2>7️⃣ PostgreSQL Security Best Practices</h2>
  <div>
    <h3>
    🔹 Enforce Strong Authentication
    </h3>
    Always use strong passwords and authentication methods:
    <div className="code-container">
            <pre>
              <code>ALTER USER postgres WITH PASSWORD 'NewSecurePassword';
              </code>
            </pre>
          </div>
  </div>

  <div>
    <h3>
    🔹 Role-Based Access Control (RBAC)
    </h3>
    Assign specific roles to limit permissions:
    <div className="code-container">
            <pre>
              <code>CREATE ROLE read_only; <br/>
GRANT SELECT ON users TO read_only;

              </code>
            </pre>
          </div>
  </div>

  <div>
    <h3>
    🔹 Enable SSL Encryption
    </h3>
    Use SSL certificates to encrypt database connections.
  </div>
</div>

<div>
  {/* number 8 */}

<h2>  8️⃣ Use Cases of PostgreSQL</h2>
<h4>🔹 Web Applications</h4>
Used in frameworks like Django, Rails, Node.js, and Spring Boot.
Supports both structured and semi-structured data.
<h4>🔹 Data Warehousing</h4>
PostgreSQL supports big data analytics and business intelligence (BI) applications.
<h4>🔹 NoSQL-Like Applications</h4>
Supports JSON, XML, and key-value storage.
<h4>🔹 Geospatial Applications</h4>
PostgreSQL provides PostGIS, a powerful GIS extension.

</div>
<div>
  {/* number 10 */}
  <h2> Conclusion</h2>
  <Link to={'https://www.postgresql.org/docs/'}>PostgreSQL</Link> is an industry-leading database system with powerful features, reliability, and flexibility. It is widely used in enterprise applications, startups, and open-source projects.

Whether you're building a simple web app, handling large-scale data, or running analytics, PostgreSQL is an excellent choice.

Now it's your turn! Start using PostgreSQL today and experience its speed, power, and scalability!
</div>

      </>  &nbsp;

      
      <h1>PostgreSQL Commands Guide</h1>
      <p>
        Below is a collection of commonly used PostgreSQL commands along with
        their explanations and examples.
      </p>
      {commands.map((command, index) => (
        <div key={index} className="command-card">
          <h2>{command.title}</h2>
          <p className="description">{command.description}</p>
          <div className="code-container">
            <pre>
              <code>{command.command}</code>
            </pre>
          </div>
        </div>
      ))} <p><strong><Link to='https://www.postgresql.org/docs/'> READ MORE</Link></strong></p>
    </div>
  );
};

export default PostgreSQLCommands;
