import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const PORT = "3000";

const IMAGES = [
    "imagens/garfield1.jpg",
    "imagens/garfield2.png",
    "imagens/garfield3.gif",
    "imagens/garfield4.jpg",
    "imagens/garfield8.png",
    "imagens/garfield20.jpg"
]

let index = 0;

app.get("/imagens", (req, res) => {

    console.log(index)

    res.status(200).json({ url: IMAGES[index] });

    // index = Math.floor(Math.random() * (IMAGES.length - 0) + 0);

    index = (index + 1) % IMAGES.length;
});

app.use(express.static('imagens'));

app.listen(PORT, () => {
    console.log(`Server is running in localhost:${PORT}`);
});