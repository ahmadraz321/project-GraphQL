const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const cors = require('cors');
const schema = require("./schema/schema");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
}));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
