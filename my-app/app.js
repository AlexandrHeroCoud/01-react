const express = require('express')
const config = require('config')
const mongouse = require('mongoose')

const app = express()

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongouse.connect(config.get('mongoUri'), {
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch (e) {
        console.log('Server error: ',e.message)
    }
}
//79d58826-62ca-41b3-84e0-e2a38b03328c
//dbMyAppUser
//React1234
//mongodb+srv://dbMyAppUser:<password>@myapp-ottop.azure.mongodb.net/<dbname>?retryWrites=true&w=majority
app.listen(PORT, ()=> console.log(`All ok you is using port ${PORT}`))