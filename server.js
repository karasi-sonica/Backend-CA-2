const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes');

dotenv.config();
const app = express();

app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));