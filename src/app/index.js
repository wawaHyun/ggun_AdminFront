const http = require('http');
const express = require('express');
const app = express();
const server = createServer(app);
const cors = require('cors');

const PORT = 8000;

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

server.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
});