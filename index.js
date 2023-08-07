const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', (req, res) => {
    res.status(200).json({running: true});
});

app.listen(PORT, () => {
    console.log(`Your application is running on http://localhost:${PORT}`);
});