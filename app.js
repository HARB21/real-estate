const express = require('express');
const app = express();
const port = 3000; // You can change the port if needed

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
function toggleMenu() {
    var navigation = document.getElementById("featured-properties");
    navigation.style.display = (navigation.style.display === 'none' || navigation.style.display === '') ? 'block' : 'none';
}

