const app = require('./app.js');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server started at https://localhost:${PORT}`);
})