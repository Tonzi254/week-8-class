const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json( {running: true });
});

let server = app.listen(PORT, () => {
    console.log(`Your application is running on http://localhost:${PORT}`);
});

module.exports = server;