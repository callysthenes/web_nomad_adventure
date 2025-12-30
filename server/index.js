import express from 'express';
import cors from 'cors';
import db from './database.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// --- ROUTES ---

// 1. Get All Products
app.get('/api/products', (req, res) => {
    db.all("SELECT * FROM products", [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        });
    });
});

// 2. Register Customer
app.post('/api/customers', (req, res) => {
    const { name, email, phone } = req.body;
    const sql = 'INSERT INTO customers (name, email, phone) VALUES (?,?,?)';
    const params = [name, email, phone];

    db.run(sql, params, function (err) {
        if (err) {
            // Handle unique constraint error
            if (err.message.includes('UNIQUE constraint failed')) {
                return res.status(409).json({ "error": "Email already exists" });
            }
            return res.status(400).json({ "error": err.message });
        }
        res.json({
            "message": "success",
            "data": { id: this.lastID, name, email, phone }
        });
    });
});

// 3. Login (Simple Mock: Find Customer by Email)
app.post('/api/login', (req, res) => {
    const { email } = req.body;
    const sql = "SELECT * FROM customers WHERE email = ?";

    db.get(sql, [email], (err, row) => {
        if (err) {
            return res.status(400).json({ "error": err.message });
        }
        if (row) {
            res.json({
                "message": "success",
                "user": row
            });
        } else {
            res.status(404).json({ "error": "User not found" });
        }
    });
});

// 4. Create Booking
app.post('/api/bookings', (req, res) => {
    const { customer_id, product_id, tour_name, message, status } = req.body;

    const sql = 'INSERT INTO bookings (customer_id, product_id, tour_name, status) VALUES (?,?,?,?)';
    const params = [customer_id, product_id, tour_name, status || 'pending'];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(400).json({ "error": err.message });
        }
        res.json({
            "message": "success",
            "data": { id: this.lastID, tour_name }
        });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
