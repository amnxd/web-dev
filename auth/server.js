require('dotenv').config()
const app = require('./src/app')
const connectDB = require('./src/db/db')

async function startServer() {
    try {
        await connectDB()
        app.listen(3000, () => {
            console.log('server is running... on port 3000...')
        })
    } catch (error) {
        console.error('Unable to connect to the database', error)
        process.exitCode = 1
    }
}

startServer()