// Import required modules
const http = require('http');
const {
    urls,
    scrapeMultipleUrls
} = require('./script')
// Define the port to listen on
const PORT = process.env.PORT || 3000;
// Define your function to be called
function handleRootRequest (req, res) {
    console.log('Request received at /');
    res.writeHead(200, { 'Content-Type': 'text/plain' });    setInterval(function() {
    scrapeMultipleUrls(urls);
    }, 7 * 60 * 1000);
    res.end();
}

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Handle requests to '/' route
    if (req.url === '/' && req.method === 'GET') {
        handleRootRequest(req, res);
    } else {
        // Handle other requests
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});
