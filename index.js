const app = require('./app') // The Express app
const logger = require('./utils/logger')

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})

// const express = require('express')
// const app = express()
// const Code = require('./models/db')
//
// const cors = require('cors')
// app.use(cors())
// app.use(express.json())
//
//
// let notes = [
//     {        id: 1,        content: "HTML is easy",        important: true    },
//     {        id: 2,        content: "Browser can execute only JavaScript",        important: false    },
//     {        id: 3,        content: "yes GET and POST are the most important methods of HTTP protocol",        important: true    }
// ]
//
// app.get('/', (req, res) => {
//     res.send('index')
// })
//
// app.get('/api/notes/:id', (request, response) => {
//     const id = Number(request.params.id)
//     const note = notes.find(note => note.id === id)
//
//     if (note) {        response.json(note)
//     } else {        response.status(404).end()    }
// })
//
