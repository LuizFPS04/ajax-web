import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const PORT = "3001";

let yesCounter = 0;
let noCounter = 0;

app.get("/contador", (req, res) => {

    res.status(200).json({ sim: yesCounter, nao: noCounter });

});

app.post("/contador", (req, res) => {

    const { vote } = req.body;

    if (vote === "sim") {
        yesCounter++;
    }

    if (vote === "nao") {
        noCounter++;
    }

    res.status(200).json({ sim: yesCounter, nao: noCounter });

});

app.listen(PORT, () => {
    console.log(`Server is running in localhost:${PORT}`);
});