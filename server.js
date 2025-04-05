const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const connectDB = require("./config/dbConnection"); // 🟡 Import the DB connector

connectDB(); // 🟢 Connect to MongoDB Atlas

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

app.use(errorHandler);
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
