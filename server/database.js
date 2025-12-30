import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, 'nomad.db');

// Use verbose mode
const verboseSqlite = sqlite3.verbose();

const db = new verboseSqlite.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        initDb();
    }
});

function initDb() {
    db.serialize(() => {
        // Customers Table
        db.run(`CREATE TABLE IF NOT EXISTS customers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            phone TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        // Products (Tours) Table
        db.run(`CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            price INTEGER,
            difficulty TEXT
        )`);

        // Bookings Table
        db.run(`CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            customer_id INTEGER NOT NULL,
            product_id INTEGER,
            tour_name TEXT,
            status TEXT DEFAULT 'pending',
            booking_date DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (customer_id) REFERENCES customers(id),
            FOREIGN KEY (product_id) REFERENCES products(id)
        )`);

        // Seed Products if empty
        db.get("SELECT count(*) as count FROM products", (err, row) => {
            if (row && row.count === 0) {
                console.log("Seeding initial products...");
                const stmt = db.prepare("INSERT INTO products (name, description, price, difficulty) VALUES (?, ?, ?, ?)");

                const initialTours = [
                    ["Morocco Atlas", "High altitude mountain passes and cedar forests.", 1500, "Medium"],
                    ["Morocco Mix", "The perfect balance of mountains and desert dunes.", 1600, "Medium/Hard"],
                    ["Morocco West", "Coastal rides meets rough interior trails.", 1450, "Easy/Medium"],
                    ["Senegal Expedition", "A classic rally raid route to Dakar.", 2200, "Hard"],
                    ["Mauritania Void", "Endless dunes and the iron ore train.", 2500, "Expert"]
                ];

                initialTours.forEach(tour => stmt.run(tour));
                stmt.finalize();
            }
        });
    });
}

export default db;
