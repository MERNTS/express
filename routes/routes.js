const codesRouter = require("express").Router();
const Code = require("../models/db");

codesRouter.get("/", (req, res) => {
    Code.find({}).then(codes=>{
        res.json(codes);
    })
})

codesRouter.get('/:id', (req,res, next)=>{
    Code.findById(req.params.id)
        .then(code=>{
            if (code){
                res.json(code)
            }else{
                res.status(404).end()
            }
        })
        .catch(error=>next(error))
    })

codesRouter.post('/', (req, res, next)=>{
    const body = req.body
    const code = new Code({
        content: body.content,
        important: body.import || false,
    })
    code.save()
        .then(saveCode =>{
            res.json(saveCode)
        })
        .catch(error => next(error))
})

module.exports = codesRouter