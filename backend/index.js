const express = require("express");
const bodyParser = require("body-parser");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(cors());

app.post("/user", async (req, res) => {
  const { content, username } = req.body;

  try {
    const newUser = await prisma.idea.create({
      data: {
        content,
        username,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json(error);
  }
});
app.get("/ideas", async (req, res) => {
  try {
    const ideas = await prisma.idea.findMany({
      orderBy: {
        createdAt: "desc", 
      },
    });
    res.status(200).json(ideas);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching ideas" });
  }
});

app.get("/", async (req, res) => {
  res.status(201).json("hey there");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
