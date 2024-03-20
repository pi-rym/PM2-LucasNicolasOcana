const app = require("./src/server");

const dbCon = require("./src/config/conDB");

const PORT = 3000;

dbCon()
  .then((res) => {
    console.log("Connected to MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));
