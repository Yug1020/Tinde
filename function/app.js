import express from "express";
import http from "http";

const app = express()

app.use("/hello/yug", (req, res) => {
    res.send("Hello Mr.Author")
})

app.use("/hello", (req, res) => {
    res.send("hello welcome to nothing");
});

app.use("/", (req, res) => {
    res.send("NamasteNode User")
})

app.listen(3000, () => {
    console.log("Successfully started server")
})
