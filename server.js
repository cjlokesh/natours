// 0. Get App
const app = require("./app");

const port = 3001;

// 2. Run application
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
