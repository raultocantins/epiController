const express = require("express");
const connnection = require("../database/connection");
const epiSchema = require("../database/epiSchema");
const ObjectId = require("objectid");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.get("/epis", (req, res) => {
  epiSchema.find((err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.json(docs);
    }
  });
});

app.post("/epi/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const using = req.body.using;
  if (using) {
    epiSchema.updateOne(
      { _id: ObjectId(id) },
      { entregue: name, using: using, data: new Date().toLocaleDateString() },
      (err, docs) => {
        if (err) {
          console.log(err);
        } else {
          res.json(docs);
        }
      }
    );
  } else {
    epiSchema.updateOne(
      { _id: ObjectId(id) },
      { entregue: "", using: using, data: "" },
      (err, docs) => {
        if (err) {
          console.log(err);
        } else {
          res.json(docs);
        }
      }
    );
  }
});

app.listen(3001, () => {
  console.log("server on...");
});
