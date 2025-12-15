let express = require("express");
let app = express();
let hostname = "localhost";
let port = 3000;

app.post('/webhook', (req, res) => {
	console.log('Received GitHub webhook payload:', req.body);
	res.status(200).send('Webhook received successfully');
});

app.listen(port, hostname, () => {
    console.log(`Webhook server running on http://${hostname}:${port}`);
});


// app.get("/index.html", (req, res) => {
// 	res.sendFile("index.html", {root: __dirname});
// });
// app.listen(port, hostname, () => {
// 	console.log(`http://${hostname}:${port}`);
// });