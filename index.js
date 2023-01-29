const express = require('express')
const format = require("date-format")
const app = express()

const PORT = 4000 || process.env.PORT

app.get("/", (req,res) => {
    res.status(200).send("<h1>Hello World!</h1>")
})

app.get("/api/v1/instagram", (req,res) => {
    const instaSocial = {
        username: "javed.akhtar432",
        followers: 250,
        follows: 500,
        date: format.asString(`dd-mm-yyyy hh:mm:ss`, new Date())
    }

    res.status(200).json(instaSocial)
})

app.get("/api/v1/facebook", (req,res) => {
    const faceSocial = {
        username: "javed.akhtar432",
        followers: 10,
        follows: 20,
        date: format.asString(`dd-mm-yyyy hh:mm:ss`, new Date())
    }

    res.status(200).json(faceSocial)
})

app.get("/api/v1/linkedin", (req,res) => {
    const linkedInSocial = {
        username: "javed.akhtar432",
        followers: 10,
        follows: 10,
        date: format.asString(`dd-mm-yyyy hh:mm:ss`, new Date())
    }

    res.status(200).json(linkedInSocial)
})

app.get("/api/v1/:token", (req,res) => {
    // console.log(req.params.token);
    res.status(200).json({params: req.params.token})
})

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})