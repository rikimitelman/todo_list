const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;
const todoRoutes = require('./routers/todoRouter');

app.use(express.json());
app.use('/todo', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});





