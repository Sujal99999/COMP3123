const express = require("express")
const BookModel = require("../models/books")

const routes = express.Router()

//Get All Books
routes.get("/books", (req, res) => {
    BookModel.find().then((books) =>
{
    res.send(books)
}).catch((err) => {

res.status(500).send({message: "Get All Books"})
})
})

//Add NEW Book
routes.post("/books", async (req, res) => {
    const bookData = req.body
console.log(bookData)
    try {
        const book = new BookModel(bookData)
        const newBook = await book.save()
        res.send(newBook)

    }catch (err) {
        res.status(500).send({message: err.message})
    }
    
    
})

//Update existing Book By Id
routes.post("/book/:bookid", (req, res) => {
    res.send({message: "Update existing Book By Id"})
})

//Delete Book By ID
routes.delete("/book/:bookid", (req, res) => {
    res.send({message: "Delete Book By ID"})
})

//Get Book By ID
routes.get("/book/:bookid", (req, res) => {
    res.send({message: "Get Book By ID"})
})

//Get All Books in sorted order
routes.get("/books/sort", (req, res) => {
    res.send({message: "Get All Books in sorted order"})
})

module.exports = routes