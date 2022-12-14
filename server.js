const express = require('express')
const app = express()

// Declaring the port
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Route
app.use('/api/user', require('./routes/userRoutes.js'))

// Running server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
