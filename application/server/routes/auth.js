const router = require("express").Router();
const pool = require("../db");

// login

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const users = await pool.query(`SELECT * FROM users WHERE user_name = '${username}' AND user_password = '${password}'`);
        if (users.rows.length === 0) {
            return res.status(401).send("Invalid credentials");
        }

        res.json({ username });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
    }
});

module.exports = router;