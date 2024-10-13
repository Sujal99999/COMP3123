const express = require("express")
const booksRoutes = require("./routes/books")
const mongoose = require("mongoose")

const app = express() 



const DB_CONNECTION_STRING = "mongodb+srv://101427974:gguXzHtsvU1B8JmP@cluster0.hr7uu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB_CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to MangoDB")
}).catch(() => {
    console.log("Error: ", err)
})

const SERVER_PORT = 3001

app.use(express.json())
app.use(express.urlencoded())


app.use("/api/v1", booksRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>")
    })

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
