const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`listening on http://localhost:${PORT}`))