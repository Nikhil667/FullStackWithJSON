const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs/promises');

app.use(cors());
app.use(express.json());

let obj = [];

app.post("/", async (req, res) => {
    console.log(req.body.formData);
    obj = await (req.body.formData);
    let res1 = await JSON.stringify(obj)
    try {
      await fs.appendFile("../data.json", res1);
    } catch (err) {
      console.log(err);
    }
});

app.get("/", async (req, res) => {
    console.log("success");
    res.send(obj);
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});