const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Webhook Wave
app.post('/webhook', (req, res) => {
    console.log('=== WEBHOOK REÇU ===');
    console.log('Body:', JSON.stringify(req.body, null, 2));
    res.status(200).send('OK');
});

app.get('/', (req, res) => {
    res.send('GBÈLÈTÈ Backend is running ✅');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
