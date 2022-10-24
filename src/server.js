const express = require("express");
const app = express();

// app.use(express.static);

app.use("/static", express.static("public")); // Translates the /static dir and repoints it to the public directory, which houses the index - use() only routes to directories

app.listen(5001, () => {
    console.log("Connected, listening on port 5001")
}) // 5001 for Mac compatibility