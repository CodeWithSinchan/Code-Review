require('dotenv').config()
const app = require('./src/app.js')

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on http://localhost:3000")
})