
const { count } = require("console")
const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    try{
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.status(201).send({data: authorCreated})
}
catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
}

}


module.exports.createAuthor= createAuthor


