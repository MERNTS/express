const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const url = process.env.MONGODB_URI
console.log('connecting to', url)
mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })

const codeSchema = new mongoose.Schema({
    keyword: String,
    snippet: String,
})
console.log('connected to MongoDB1')

const Code = mongoose.model('Code', codeSchema)
console.log('connected to MongoDB2')

const code = new Code({
    keyword: 'openai',
    snippet: 'from openai import OpenAI',
})
console.log('connected to MongoDB3')

code.save().then(result=>{
    console.log('good saved')
    mongoose.connection.close()
})

