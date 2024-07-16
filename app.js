const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/enquiry-data", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("connected to Mongo");
  })
  .catch(() => {
    console.log("error connecting to Mongo");
  });

const enquirySchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  notes: { type: String, required: true },
});

const Enquiry = mongoose.model("collection", enquirySchema);

app.post("/", async (req, res) => {
  try {
    const { username, email, notes } = req.body;
    const newEnquiry = new Enquiry({ username, email, notes });
    await newEnquiry.save();
    res.status(200).send("Form submitted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(8000, () => console.log("Server running on port 8000"));
