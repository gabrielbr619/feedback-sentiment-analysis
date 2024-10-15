require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/database");

const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
